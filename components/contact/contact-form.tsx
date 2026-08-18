'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <span className="mb-5 inline-flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="font-serif text-2xl font-semibold">Message received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. A member of the Lord Gibson UK office will
          be in touch with you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full border-primary/25 bg-transparent"
          onClick={() => setSent(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className={fieldClass}
          placeholder="How can we help?"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-none`}
          placeholder="Write your message..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 h-12 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-8"
      >
        Send Message
        <Send className="size-4" />
      </Button>
    </form>
  )
}
