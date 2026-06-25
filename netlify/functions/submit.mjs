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
  // Highlight applications that opted into the paid gala dinner.
  const header = data.galaDinner
    ? [
        '🟡🟡🟡 <b>+ ГАЛА-УЖИН (платно 60 000 ₸)</b> 🟡🟡🟡',
        '',
        '🎯 <b>Новая заявка · Investment Forum 2026</b>',
      ]
    : ['🎯 <b>Новая заявка · Investment Forum 2026</b>'];

  const footer = data.galaDinner
    ? ['', '🍽 <b>ГАЛА-УЖИН:</b> ДА — ожидает оплаты 60 000 ₸ (12 мест)']
    : ['', '🆓 <b>Участие:</b> бесплатная регистрация (без гала-ужина)'];

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
        'Участие',
        data.galaDinner
          ? 'Бесплатная регистрация + Гала-ужин (60 000 ₸, ожидает оплаты)'
          : 'Бесплатная регистрация',
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

// ── Email to APPLICANT ───────────────────────────────────────────────────────
// Paid applicants get the payment QR; free-pass (gov-list) applicants get a
// confirmation WITHOUT any payment info.
async function sendApplicantEmail(data) {
  if (!RESEND_API_KEY) throw new Error('Resend not configured');

  const headerBlock = `
    <div style="background:#0a1e3f;padding:28px 32px;text-align:center;">
      <h1 style="margin:0;color:#e3c478;font-size:22px;">Investment Forum 2026</h1>
      <p style="margin:8px 0 0;color:#faf6ee;opacity:.8;font-size:14px;">Италия × Казахстан · 29–30 июня 2026 · AIFC, Астана</p>
    </div>`;

  let bodyBlock;
  let subject;

  if (data.galaDinner) {
    // Free forum registration + paid gala dinner → QR for the dinner only
    subject = 'Регистрация принята · оплата Гала-ужина · Investment Forum 2026';
    bodyBlock = `
    <div style="padding:28px 32px;border:1px solid #e7e2d5;border-top:none;color:#1a1a1a;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:15px;">Здравствуйте, ${escapeHtml(data.fullName)}!</p>
      <p style="margin:0 0 16px;font-size:15px;">
        Ваша регистрация на Инвестиционный форум Италия–Казахстан принята —
        <strong>участие в форуме бесплатное</strong>.
      </p>
      <p style="margin:0 0 20px;font-size:15px;">
        Вы также выбрали участие в Гала-ужине 29 июня. Стоимость —
        <strong>60 000 ₸</strong> с человека (ограничено 12 мест). Оплатите по
        QR-коду ниже, чтобы забронировать место.
      </p>
      <div style="text-align:center;margin:24px 0;">
        <img src="${QR_URL}" alt="QR-код для оплаты Гала-ужина" width="280" style="border:1px solid #e7e2d5;border-radius:8px;" />
      </div>
      <p style="margin:0 0 8px;font-size:14px;text-align:center;color:#0a1e3f;font-weight:600;">
        Отсканируйте QR в приложении Halyk или Kaspi
      </p>
      <p style="margin:0 0 24px;font-size:13px;text-align:center;color:#6b6375;">
        Получатель: ИП АТОМ ЮНИТ (г. Алматы)
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${BOT_LINK}" style="display:inline-block;background:#0a1e3f;color:#e3c478;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:600;font-size:14px;">
          Оплатить Гала-ужин в Telegram →
        </a>
      </div>
      <p style="margin:24px 0 0;font-size:13px;color:#6b6375;border-top:1px solid #e7e2d5;padding-top:16px;">
        После оплаты пришлите чек в нашем Telegram-боте или на ufficiopresidenza@italkazak.it.
        По вопросам: WhatsApp +7 706 450 1243.
      </p>
    </div>`;
  } else {
    // Free forum registration only — no payment
    subject = 'Регистрация принята · Investment Forum 2026';
    bodyBlock = `
    <div style="padding:28px 32px;border:1px solid #e7e2d5;border-top:none;color:#1a1a1a;line-height:1.6;">
      <p style="margin:0 0 16px;font-size:15px;">Здравствуйте, ${escapeHtml(data.fullName)}!</p>
      <p style="margin:0 0 16px;font-size:15px;">
        Благодарим за регистрацию на Инвестиционный форум Италия–Казахстан
        (29–30 июня 2026, AIFC, Астана). <strong>Участие в форуме бесплатное</strong> —
        дополнительная оплата не требуется.
      </p>
      <p style="margin:0 0 16px;font-size:14px;color:#6b6375;">
        Наш менеджер свяжется с вами по указанным контактам. При желании вы
        можете дополнительно посетить праздничный Гала-ужин 29 июня
        (60 000 ₸, 12 мест) — сообщите нам, если это интересно.
      </p>
      <p style="margin:24px 0 0;font-size:13px;color:#6b6375;border-top:1px solid #e7e2d5;padding-top:16px;">
        По вопросам: WhatsApp +7 706 450 1243 · ufficiopresidenza@italkazak.it.
      </p>
    </div>`;
  }

  const html = `<div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;">${headerBlock}${bodyBlock}</div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [data.email],
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend(applicant) ${res.status}: ${detail}`);
  }
}

// Switch to true to re-open registration again (must match Form.tsx).
const REGISTRATION_OPEN = false;

// ── Handler ──────────────────────────────────────────────────────────────────
export default async (req) => {
  if (req.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed' });
  }

  // Registration closed: reject any new submissions (defence even if a stale
  // cached front-end still shows the form).
  if (!REGISTRATION_OPEN) {
    return json(403, {
      ok: false,
      error: 'Приём заявок завершён. Регистрация на форум закрыта.',
    });
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
