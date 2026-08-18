'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2"
    >
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Featured
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {post.category}
          </span>
        </div>

        <h2 className="font-serif text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <div className="mt-6 flex items-center gap-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Read the story
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </motion.div>
  )
}
