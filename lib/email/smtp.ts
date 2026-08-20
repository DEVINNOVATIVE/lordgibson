import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

function requireEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export function getSmtpConfig() {
  const user = requireEnv('SMTP_USER')

  return {
    host: requireEnv('SMTP_HOST'),
    port: Number(process.env.SMTP_PORT ?? '587'),
    secure: process.env.SMTP_SECURE === 'true',
    user,
    pass: requireEnv('SMTP_PASS'),
    from: process.env.SMTP_FROM?.trim() || user,
    to: process.env.CONTACT_TO_EMAIL?.trim() || 'lnbg@lordgibson.co.uk',
  }
}

export function createSmtpTransporter() {
  const config = getSmtpConfig()

  const options: SMTPTransport.Options = {
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  }

  return nodemailer.createTransport(options)
}
