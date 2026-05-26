/**
 * POST /.netlify/functions/submit
 *
 * Receives the registration form, validates the payload, and forwards
 * the data to a Telegram chat via the Bot API.
 *
 * Env vars (set with `netlify env:set …`):
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — destination chat id (personal user id or -100… for groups)
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const REQUIRED_FIELDS = [
  'company',
  'sector',
  'fullName',
  'position',
  'address',
  'email',
  'phone',
  'description',
];

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export default async (req) => {
  if (req.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed' });
  }

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return json(500, {
      ok: false,
      error: 'Server not configured (missing env vars)',
    });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON body' });
  }

  // Validate required fields
  for (const field of REQUIRED_FIELDS) {
    if (
      typeof data[field] !== 'string' ||
      data[field].trim().length === 0
    ) {
      return json(400, {
        ok: false,
        error: `Missing or empty field: ${field}`,
      });
    }
  }

  // Anti-spam: cap field length
  const tooLong = REQUIRED_FIELDS.find((f) => data[f].length > 2000);
  if (tooLong) {
    return json(400, { ok: false, error: `Field too long: ${tooLong}` });
  }

  const lines = [
    '🎯 <b>Новая заявка · Investment Forum 2026</b>',
    '',
    `🏢 <b>Компания:</b> ${escapeHtml(data.company)}`,
    `🏭 <b>Сектор:</b> ${escapeHtml(data.sector)}`,
    '',
    `👤 <b>ФИО:</b> ${escapeHtml(data.fullName)}`,
    `💼 <b>Должность:</b> ${escapeHtml(data.position)}`,
    '',
    `📍 <b>Адрес:</b> ${escapeHtml(data.address)}`,
    `📧 <b>Email:</b> ${escapeHtml(data.email)}`,
    `📱 <b>Телефон:</b> ${escapeHtml(data.phone)}`,
    `🌐 <b>Сайт:</b> ${data.website ? escapeHtml(data.website) : '—'}`,
    '',
    '📝 <b>Описание:</b>',
    escapeHtml(data.description),
  ];

  const text = lines.join('\n');

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      },
    );

    const tgBody = await tgRes.json();
    if (!tgBody.ok) {
      console.error('Telegram error:', tgBody);
      return json(502, {
        ok: false,
        error: 'Telegram rejected the message',
        detail: tgBody.description,
      });
    }
  } catch (err) {
    console.error('Fetch error:', err);
    return json(502, { ok: false, error: 'Network error reaching Telegram' });
  }

  return json(200, { ok: true });
};
