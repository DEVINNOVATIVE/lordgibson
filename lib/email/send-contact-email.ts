import {
  buildContactEmailHtml,
  buildContactEmailText,
  type ContactFormPayload,
} from '@/lib/email/contact-template'
import { createSmtpTransporter, getSmtpConfig } from '@/lib/email/smtp'

export async function sendContactEmail(payload: ContactFormPayload) {
  const config = getSmtpConfig()
  const transporter = createSmtpTransporter()

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: payload.email,
    subject: `[Contact Form] ${payload.subject}`,
    text: buildContactEmailText(payload),
    html: buildContactEmailHtml(payload),
  })
}
