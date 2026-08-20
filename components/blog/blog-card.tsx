'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card card-glow card-glow-hover"
    >
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-primary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-md">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <span>{post.date}</span>
          <span className="size-1 rounded-full bg-accent/40" />
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="font-serif text-xl font-semibold leading-snug text-balance text-foreground">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          Read article
          <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}
