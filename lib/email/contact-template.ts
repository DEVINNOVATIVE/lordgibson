export type ContactFormPayload = {
  name: string
  email: string
  subject: string
  message: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildContactEmailHtml(payload: ContactFormPayload): string {
  const { name, email, subject, message } = payload
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Form — ${safeSubject}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f7f5f1;font-family:Georgia,'Times New Roman',serif;color:#1a2238;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f7f5f1;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background-color:#ffffff;border:1px solid #e8e4dc;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#1a2238;padding:28px 32px;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a86a;font-family:Arial,sans-serif;">
                  Lord Gibson UK
                </p>
                <h1 style="margin:0;font-size:28px;line-height:1.3;font-weight:600;color:#f7f5f1;">
                  New Contact Form Submission
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#4b5563;font-family:Arial,sans-serif;">
                  You have received a new message from the website contact form.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #ece7df;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8b93a7;width:120px;">
                      Name
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #ece7df;font-family:Arial,sans-serif;font-size:15px;color:#1a2238;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #ece7df;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8b93a7;">
                      Email
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #ece7df;font-family:Arial,sans-serif;font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#1a2238;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #ece7df;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8b93a7;">
                      Subject
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #ece7df;font-family:Arial,sans-serif;font-size:15px;color:#1a2238;">
                      ${safeSubject}
                    </td>
                  </tr>
                </table>

                <div style="margin-top:28px;padding:20px;background-color:#faf8f4;border:1px solid #ece7df;border-radius:12px;">
                  <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8b93a7;">
                    Message
                  </p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#1a2238;">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#faf8f4;border-top:1px solid #ece7df;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#8b93a7;">
                  This email was sent from the Lord Gibson UK contact form. Reply directly to ${safeEmail} to respond.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export function buildContactEmailText(payload: ContactFormPayload): string {
  const { name, email, subject, message } = payload

  return [
    'New Contact Form Submission',
    'Lord Gibson UK',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
    '',
    `Reply to: ${email}`,
  ].join('\n')
}
