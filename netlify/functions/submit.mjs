/**
 * POST /.netlify/functions/submit
 *
 * Receives the registration form, validates the payload, and forwards it to:
 *   1. a Telegram chat (Bot API)
 *   2. email recipients (Resend API)
 * Both channels are attempted independently — if one fails the other still
 * delivers. The request succeeds if at least one channel accepted the lead.
 *
 * Env vars (set with `netlify env:set …`):
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — destination chat id (-100… for groups)
 *   RESEND_API_KEY      — Resend API key (re_…)
 *   MAIL_FROM           — optional sender, defaults to onboarding@resend.dev
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// Strip leading backslash — netlify-cli env:set requires escaping the minus
// prefix on group chat IDs and stores the backslash literally.
const TELEGRAM_CHAT_ID = (process.env.TELEGRAM_CHAT_ID ?? '').replace(/^\\/, '');

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_FROM =
  process.env.MAIL_FROM || 'InvestBridge Forum <onboarding@resend.dev>';
const MAIL_TO = [
  'ufficiopresidenza@italkazak.it',
  'edda.battistella@italkazak.it',
  'issak.k@agriqa.asia',
];

const QR_URL = 'https://investbridge.kz/qr-payment.png';
const BOT_LINK = 'https://t.me/italkz_forum_bot?start=pay';

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

// ── Telegram ────────────────────────────────────────────────────────────────
async function sendTelegram(data) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram not configured');
  }
  // Bright header + footer banner for free-pass (gov-list) applications so
  // they stand out in the shared chat; paid leads get the normal header.
  const header = data.govListAccepted
    ? [
        '🟢🟢🟢 <b>БЕСПЛАТНЫЙ ПРОПУСК — ГОСОРГАН</b> 🟢🟢🟢',
        `🏛 <b>Орган:</b> ${escapeHtml(data.govBody)}${
          data.govRegion ? ` — ${escapeHtml(data.govRegion)}` : ''
        }`,
        '⚠️ <i>Требует проверки по спискам органа (до 25 июня)</i>',
        '',
        '🎯 <b>Новая заявка · Investment Forum 2026</b>',
      ]
    : ['🎯 <b>Новая заявка · Investment Forum 2026</b>'];

  const footer = data.govListAccepted
    ? ['', '🟢 <b>ТИП: БЕСПЛАТНЫЙ ПРОПУСК (госорган)</b> — проверить по спискам!']
    : ['', '💳 <b>Тип участия:</b> Платный взнос'];

  const text = [
    ...header,
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
    ...footer,
  ].join('\n');

  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  );
  const body = await res.json();
  if (!body.ok) throw new Error(`Telegram: ${body.description}`);
}

// ── Email (Resend) ───────────────────────────────────────────────────────────
async function sendEmail(data) {
  if (!RESEND_API_KEY) throw new Error('Resend not configured');

  const row = (label, value) =>
    `<tr>
       <td style="padding:8px 16px;background:#f5efe2;font-weight:600;color:#0a1e3f;white-space:nowrap;">${label}</td>
       <td style="padding:8px 16px;color:#1a1a1a;">${escapeHtml(value) || '—'}</td>
     </tr>`;

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#0a1e3f;padding:24px 32px;">
      <h1 style="margin:0;color:#e3c478;font-size:20px;">🎯 Новая заявка · Investment Forum 2026</h1>
      <p style="margin:6px 0 0;color:#faf6ee;opacity:.7;font-size:13px;">investbridge.kz · 29–30 июня 2026 · AIFC, Астана</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e7e2d5;border-top:none;">
      ${row('Компания', data.company)}
      ${row('Сектор', data.sector)}
      ${row('ФИО', data.fullName)}
      ${row('Должность', data.position)}
      ${row('Адрес', data.address)}
      ${row('Email', data.email)}
      ${row('Телефон', data.phone)}
      ${row('Сайт', data.website)}
      ${row(
        'Тип участия',
        data.govListAccepted
          ? `Бесплатный пропуск — ${data.govBody}${data.govRegion ? ` (${data.govRegion})` : ''} (требует проверки по спискам до 25 июня)`
          : 'Платный взнос',
      )}
    </table>
    <div style="padding:16px 32px;border:1px solid #e7e2d5;border-top:none;">
      <p style="margin:0 0 6px;font-weight:600;color:#0a1e3f;font-size:13px;">Описание деятельности:</p>
      <p style="margin:0;color:#1a1a1a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.description)}</p>
    </div>
  </div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: MAIL_TO,
      reply_to: data.email,
      subject: `Заявка: ${data.company} (${data.sector})`,
      html,
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
}

// ── Email to APPLICANT with payment QR ───────────────────────────────────────
async function sendApplicantEmail(data) {
  if (!RESEND_API_KEY) throw new Error('Resend not configured');

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;">
    <div style="background:#0a1e3f;padding:28px 32px;text-align:center;">
      <h1 style="margin:0;color:#e3c478;font-size:22px;">Investment Forum 2026</h1>
      <p style="margin:8px 0 0;color:#faf6ee;opacity:.8;font-size:14px;">Италия × Казахстан · 29–30 июня 2026 · AIFC, Астана</p>
    </div>
    <div style="padding:28px 32px;border:1px solid #e7e2d5;border-top:none;color:#1a1a1a;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:15px;">Здравствуйте, ${escapeHtml(data.fullName)}!</p>
      <p style="margin:0 0 20px;font-size:15px;">
        Благодарим за заявку на участие в Инвестиционном форуме Италия–Казахстан.
        Для подтверждения участия оплатите регистрационный взнос по QR-коду ниже.
      </p>
      <div style="text-align:center;margin:24px 0;">
        <img src="${QR_URL}" alt="QR-код для оплаты" width="280" style="border:1px solid #e7e2d5;border-radius:8px;" />
      </div>
      <p style="margin:0 0 8px;font-size:14px;text-align:center;color:#0a1e3f;font-weight:600;">
        Отсканируйте QR в приложении Halyk или Kaspi
      </p>
      <p style="margin:0 0 24px;font-size:13px;text-align:center;color:#6b6375;">
        Получатель: ИП АТОМ ЮНИТ (г. Алматы)
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${BOT_LINK}" style="display:inline-block;background:#0a1e3f;color:#e3c478;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:600;font-size:14px;">
          Получить QR-код в Telegram →
        </a>
      </div>
      <p style="margin:24px 0 0;font-size:13px;color:#6b6375;border-top:1px solid #e7e2d5;padding-top:16px;">
        После оплаты пришлите чек в нашем Telegram-боте или на ufficiopresidenza@italkazak.it.
        По вопросам: WhatsApp +7 706 450 1243.
      </p>
    </div>
  </div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [data.email],
      subject: 'Оплата участия · Investment Forum 2026',
      html,
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend(applicant) ${res.status}: ${detail}`);
  }
}

// ── Handler ──────────────────────────────────────────────────────────────────
export default async (req) => {
  if (req.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed' });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON body' });
  }

  for (const field of REQUIRED_FIELDS) {
    if (typeof data[field] !== 'string' || data[field].trim().length === 0) {
      return json(400, { ok: false, error: `Missing or empty field: ${field}` });
    }
  }
  const tooLong = REQUIRED_FIELDS.find((f) => data[f].length > 2000);
  if (tooLong) {
    return json(400, { ok: false, error: `Field too long: ${tooLong}` });
  }

  // Fire all channels independently
  const [tg, mail, applicant] = await Promise.allSettled([
    sendTelegram(data),
    sendEmail(data),
    sendApplicantEmail(data),
  ]);

  if (tg.status === 'rejected') console.error('Telegram failed:', tg.reason);
  if (mail.status === 'rejected') console.error('Email failed:', mail.reason);
  if (applicant.status === 'rejected')
    console.error('Applicant email failed:', applicant.reason);

  // Success if at least one channel delivered the lead
  if (tg.status === 'fulfilled' || mail.status === 'fulfilled') {
    return json(200, {
      ok: true,
      delivered: {
        telegram: tg.status === 'fulfilled',
        email: mail.status === 'fulfilled',
      },
    });
  }

  return json(502, {
    ok: false,
    error: 'Не удалось доставить заявку. Попробуйте ещё раз или напишите в WhatsApp.',
  });
};
