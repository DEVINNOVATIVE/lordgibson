'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, Clock, User } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-28 pb-16 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
        >
          {post.category}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl font-semibold leading-tight text-balance text-primary-foreground sm:text-5xl"
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70"
        >
          <span className="inline-flex items-center gap-2">
            <User className="size-4 text-accent" />
            {post.author}
          </span>
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-accent" />
            {post.readingTime}
          </span>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
