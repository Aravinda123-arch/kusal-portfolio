import nodemailer from 'nodemailer';
import { personalInfo } from '../data/portfolioData';

export interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailSendResult {
  success: boolean;
  message: string;
  messageId?: string;
  provider?: 'smtp' | 'resend' | 'formsubmit';
  requiresActivation?: boolean;
}

/**
 * Validates which email delivery provider is configured.
 * Hierarchy:
 * 1. SMTP (Nodemailer) if SMTP_HOST, SMTP_USER, and SMTP_PASS are set
 * 2. Resend API if RESEND_API_KEY is set
 * 3. FormSubmit cloud service (zero configuration required, delivers directly to recipient email)
 */
export function getEmailServiceStatus(): {
  configured: boolean;
  provider: 'smtp' | 'resend' | 'formsubmit';
  recipient: string;
} {
  const recipient = process.env.CONTACT_TO_EMAIL || personalInfo.email;
  const hasSmtp = Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_PASS.trim().length > 0
  );
  const hasResend = Boolean(
    process.env.RESEND_API_KEY &&
    process.env.RESEND_API_KEY.trim().length > 0
  );

  if (hasSmtp) {
    return { configured: true, provider: 'smtp', recipient };
  }
  if (hasResend) {
    return { configured: true, provider: 'resend', recipient };
  }
  // FormSubmit provides out-of-the-box email forwarding to recipient without requiring local secrets
  return { configured: true, provider: 'formsubmit', recipient };
}

/**
 * Builds a clean HTML template for contact form inquiries.
 */
function buildHtmlEmail(payload: EmailPayload): string {
  const dateFormatted = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const escapedName = escapeHtml(payload.name);
  const escapedEmail = escapeHtml(payload.email);
  const escapedSubject = escapeHtml(payload.subject);
  const escapedMessage = escapeHtml(payload.message).replace(/\n/g, '<br />');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
          <!-- Header Banner -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #ddd6fe; font-weight: 700;">Portfolio Inquiry</span>
              <h1 style="margin: 6px 0 0; font-size: 22px; font-weight: 800; color: #ffffff;">New Message from ${escapedName}</h1>
            </td>
          </tr>

          <!-- Meta Info Card -->
          <tr>
            <td style="padding: 24px 32px 12px; background-color: #172033; border-bottom: 1px solid #1f2937;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #94a3b8; width: 90px; vertical-align: top;">From:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #f8fafc; font-weight: 600;">${escapedName} &lt;<a href="mailto:${escapedEmail}" style="color: #38bdf8; text-decoration: none;">${escapedEmail}</a>&gt;</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #94a3b8; vertical-align: top;">Subject:</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #f8fafc; font-weight: 600;">${escapedSubject}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #94a3b8; vertical-align: top;">Received:</td>
                  <td style="padding: 6px 0; font-size: 12px; color: #cbd5e1;">${dateFormatted}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 32px; background-color: #111827;">
              <h2 style="margin: 0 0 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #a78bfa; font-weight: 700;">Message Content:</h2>
              <div style="background-color: #0b0f19; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.7; color: #e2e8f0; word-break: break-word;">
                ${escapedMessage}
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 28px;">
                <tr>
                  <td align="center" style="border-radius: 8px; background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);">
                    <a href="mailto:${escapedEmail}?subject=Re: ${encodeURIComponent(payload.subject)}" style="display: inline-block; padding: 12px 24px; font-size: 13px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Reply directly to ${escapedName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0a0d16; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b;">
                Sent via Kusal Aravinda's Portfolio Contact Form &bull; Destination: ${escapeHtml(process.env.CONTACT_TO_EMAIL || personalInfo.email)}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Builds plain text version for email clients that do not render HTML.
 */
function buildPlainTextEmail(payload: EmailPayload): string {
  return `
========================================
NEW PORTFOLIO MESSAGE
========================================
From:    ${payload.name} <${payload.email}>
Subject: ${payload.subject}
Date:    ${new Date().toISOString()}

MESSAGE:
----------------------------------------
${payload.message}
----------------------------------------

Reply-To: ${payload.email}
Target: ${process.env.CONTACT_TO_EMAIL || personalInfo.email}
========================================
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sends the email using either SMTP, Resend API, or FormSubmit cloud forwarding.
 */
export async function sendContactEmail(payload: EmailPayload): Promise<EmailSendResult> {
  const status = getEmailServiceStatus();
  const recipient = status.recipient;
  const subjectLine = `[Portfolio Contact] ${payload.subject} (from ${payload.name})`;

  // 1. SMTP Provider via Nodemailer (if configured)
  if (status.provider === 'smtp') {
    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = process.env.SMTP_SECURE === 'true' || port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const fromAddress =
      process.env.CONTACT_FROM_EMAIL ||
      `"${payload.name} (via Portfolio)" <${process.env.SMTP_USER}>`;

    const info = await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: `"${payload.name}" <${payload.email}>`,
      subject: subjectLine,
      text: buildPlainTextEmail(payload),
      html: buildHtmlEmail(payload),
    });

    return {
      success: true,
      message: `Thank you, ${payload.name}! Your message has been sent directly to Kusal's inbox.`,
      messageId: info.messageId,
      provider: 'smtp',
    };
  }

  // 2. Resend API Provider (if configured)
  if (status.provider === 'resend') {
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      process.env.CONTACT_FROM_EMAIL ||
      'Portfolio Contact <onboarding@resend.dev>';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: recipient,
        reply_to: payload.email,
        subject: subjectLine,
        text: buildPlainTextEmail(payload),
        html: buildHtmlEmail(payload),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const errorMsg =
        data?.message || data?.error || `Resend API returned status ${res.status}`;
      throw new Error(`Resend API delivery failed: ${errorMsg}`);
    }

    return {
      success: true,
      message: `Thank you, ${payload.name}! Your message has been sent directly to Kusal's inbox.`,
      messageId: data.id,
      provider: 'resend',
    };
  }

  // 3. FormSubmit Cloud Forwarding (Zero setup required, forwards directly to recipient inbox)
  if (status.provider === 'formsubmit') {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Referer: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        Origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _replyto: payload.email,
        _subject: subjectLine,
        message: payload.message,
        _captcha: 'false',
        _template: 'table',
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok && !data) {
      throw new Error(`Email delivery service returned HTTP status ${res.status}`);
    }

    const isSuccess = data?.success === true || data?.success === 'true';
    const messageText = data?.message || '';

    if (isSuccess) {
      return {
        success: true,
        message: `Thank you, ${payload.name}! Your message has been delivered directly to Kusal's inbox.`,
        provider: 'formsubmit',
      };
    }

    // First time FormSubmit receives a message for an email, it sends an activation link to the recipient
    if (messageText.toLowerCase().includes('activation') || messageText.toLowerCase().includes('activate')) {
      return {
        success: true,
        requiresActivation: true,
        message: `Form submitted! FormSubmit sent a 1-time activation link to ${recipient}. Please check your inbox and click "Activate Form" once to enable instant delivery for this and all future inquiries.`,
        provider: 'formsubmit',
      };
    }

    throw new Error(messageText || 'Email delivery could not be completed.');
  }

  throw new Error('Unsupported email delivery provider.');
}
