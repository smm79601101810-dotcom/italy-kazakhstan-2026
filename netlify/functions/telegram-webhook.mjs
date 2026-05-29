/**
 * POST /.netlify/functions/telegram-webhook
 *
 * Telegram Bot webhook. Handles two interactions in PRIVATE chats with users:
 *   1. /start (optionally /start pay) → sends the payment QR + instructions
 *   2. user sends a photo/document (payment receipt) → forwarded to the
 *      operators group with a "💳 Чек об оплате" caption
 *
 * Messages coming from the operators group itself are ignored (no loops).
 *
 * Env vars:
 *   TELEGRAM_BOT_TOKEN        — bot token
 *   TELEGRAM_CHAT_ID          — operators group id (-100…)
 *   TELEGRAM_WEBHOOK_SECRET   — shared secret, checked against Telegram header
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GROUP_ID = (process.env.TELEGRAM_CHAT_ID ?? '').replace(/^\\/, '');
const SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;

const QR_URL = 'https://investbridge.kz/qr-payment.png';

const PAY_CAPTION = [
  '💳 <b>Оплата участия · Investment Forum 2026</b>',
  '',
  'Отсканируйте QR-код в приложении <b>Halyk</b> или <b>Kaspi</b> и оплатите регистрационный взнос.',
  '',
  'Получатель: <b>ИП АТОМ ЮНИТ</b> (г. Алматы)',
  '',
  '✅ После оплаты пришлите сюда <b>фото или скриншот чека</b> — мы подтвердим ваше участие.',
].join('\n');

const tg = (method, payload) =>
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then((r) => r.json());

export default async (req) => {
  // Reject anything that is not the Telegram webhook with our secret
  if (req.method !== 'POST') return new Response('ok', { status: 200 });
  if (
    SECRET &&
    req.headers.get('x-telegram-bot-api-secret-token') !== SECRET
  ) {
    return new Response('forbidden', { status: 403 });
  }

  let update;
  try {
    update = await req.json();
  } catch {
    return new Response('ok', { status: 200 });
  }

  const msg = update.message;
  // Always 200 so Telegram doesn't retry; we just no-op on irrelevant updates
  if (!msg || !msg.chat) return new Response('ok', { status: 200 });

  const chatId = msg.chat.id;
  const chatType = msg.chat.type;

  // Ignore anything happening inside the operators group itself
  if (String(chatId) === String(GROUP_ID)) {
    return new Response('ok', { status: 200 });
  }

  // Only handle private 1:1 chats with users
  if (chatType !== 'private') {
    return new Response('ok', { status: 200 });
  }

  const from = msg.from || {};
  const who =
    [from.first_name, from.last_name].filter(Boolean).join(' ') ||
    'пользователь';
  const handle = from.username ? `@${from.username}` : `id ${from.id}`;

  try {
    // 1) /start → send QR
    if (typeof msg.text === 'string' && msg.text.trim().startsWith('/start')) {
      await tg('sendPhoto', {
        chat_id: chatId,
        photo: QR_URL,
        caption: PAY_CAPTION,
        parse_mode: 'HTML',
      });
      return new Response('ok', { status: 200 });
    }

    // 2) Receipt (photo or document) → forward to operators group
    if (msg.photo || msg.document) {
      // Forward the original message so operators see the actual file
      await tg('forwardMessage', {
        chat_id: GROUP_ID,
        from_chat_id: chatId,
        message_id: msg.message_id,
      });
      // Context line so operators know who paid
      await tg('sendMessage', {
        chat_id: GROUP_ID,
        text: `💳 <b>Чек об оплате</b> от ${escapeHtml(who)} (${escapeHtml(handle)})`,
        parse_mode: 'HTML',
      });
      // Acknowledge to the user
      await tg('sendMessage', {
        chat_id: chatId,
        text: '✅ Спасибо! Чек получен — мы свяжемся с вами для подтверждения участия.',
      });
      return new Response('ok', { status: 200 });
    }

    // Any other private message → gentle hint
    await tg('sendMessage', {
      chat_id: chatId,
      text: 'Нажмите /start, чтобы получить QR-код для оплаты. После оплаты пришлите сюда фото чека.',
    });
  } catch (err) {
    console.error('webhook error:', err);
  }

  return new Response('ok', { status: 200 });
};

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
