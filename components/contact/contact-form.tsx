'use client'

import { useState, useTransition, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CircleCheck as CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'
import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-xl border border-input bg-card px-4 py-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-accent/40 disabled:cursor-not-allowed disabled:opacity-60'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setError(null)

    startTransition(async () => {
      const result = await submitContactForm(formData)

      if (result.success) {
        form.reset()
        setSent(true)
        return
      }

      setError(result.error)
    })
  }

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-card p-14 text-center card-glow"
        >
          <div className="absolute -right-12 -top-12 size-48 rounded-full bg-accent/5 blur-2xl" />
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="relative mb-6 inline-flex size-16 items-center justify-center rounded-full bg-accent/15 text-accent"
          >
            <CheckCircle2 className="size-8" />
          </motion.span>
          <h3 className="relative font-serif text-3xl font-semibold">Message received</h3>
          <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thank you for reaching out. A member of the Lord Gibson UK office will
            be in touch with you shortly.
          </p>
          <Button
            variant="outline"
            className="relative mt-8 rounded-full border-primary/20 bg-transparent"
            onClick={() => setSent(false)}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-border bg-card p-8 card-glow sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                disabled={isPending}
                maxLength={120}
                className={fieldClass}
                placeholder="Jane Doe"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isPending}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 flex flex-col gap-2"
          >
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              disabled={isPending}
              maxLength={200}
              className={fieldClass}
              placeholder="How can we help?"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 flex flex-col gap-2"
          >
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isPending}
              maxLength={5000}
              rows={6}
              className={`${fieldClass} resize-none`}
              placeholder="Write your message..."
            />
          </motion.div>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive"
            >
              {error}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="group mt-7 h-13 w-full rounded-full bg-primary px-8 text-base text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 sm:w-auto"
            >
              {isPending ? (
                <>
                  Sending...
                  <Loader2 className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
