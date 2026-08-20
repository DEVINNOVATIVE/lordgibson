'use server'

import { sendContactEmail } from '@/lib/email/send-contact-email'

export type ContactFormResult =
  | { success: true }
  | { success: false; error: string }

function getField(formData: FormData, key: string): string {
  return formData.get(key)?.toString().trim() ?? ''
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitContactForm(
  formData: FormData,
): Promise<ContactFormResult> {
  const name = getField(formData, 'name')
  const email = getField(formData, 'email')
  const subject = getField(formData, 'subject')
  const message = getField(formData, 'message')

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  if (name.length > 120 || subject.length > 200 || message.length > 5000) {
    return { success: false, error: 'One or more fields exceed the allowed length.' }
  }

  if (!isValidEmail(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  try {
    await sendContactEmail({ name, email, subject, message })
    return { success: true }
  } catch (error) {
    console.error('[contact-form]', error)
    return {
      success: false,
      error:
        'We could not send your message right now. Please try again or email us directly.',
    }
  }
}
