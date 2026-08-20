'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-28 pb-0 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,106,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/blog"
              className="group mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground/70 backdrop-blur-sm transition-colors hover:border-accent/30 hover:text-accent"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-4 inline-flex items-center rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
          >
            {post.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl font-semibold leading-tight text-balance text-primary-foreground sm:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/60"
          >
            <span className="inline-flex items-center gap-2">
              <User className="size-4 text-accent" />
              {post.author}
            </span>
            <span className="hidden size-1 rounded-full bg-accent/40 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Calendar className="size-4 text-accent" />
              {post.date}
            </span>
            <span className="hidden size-1 rounded-full bg-accent/40 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-accent" />
              {post.readingTime}
            </span>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-2 max-w-5xl px-5 pb-10 sm:-mt-6 sm:px-8 sm:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/80 bg-secondary shadow-2xl shadow-primary/10 sm:rounded-3xl"
        >
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </motion.div>
      </div>
    </>
  )
}
