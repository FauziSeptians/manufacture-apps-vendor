'use client';

import { Badge } from '@/components/ui/badge';
import { POSTS } from '@/data/post';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Dictionary } from '@/lib/dictionary';

export default function NewsDetailPage({
  id,
  dict,
}: {
  id: string;
  dict: Dictionary;
}) {
  const post = POSTS.find((p) => p.id === parseInt(id));
  const otherPosts = POSTS.filter((p) => p.id !== parseInt(id)).slice(0, 5);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* HEADER SECTION */}
      <div className="container mx-auto px-6 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="group mb-8 inline-flex items-center text-sm font-bold text-amber-600 uppercase transition-all hover:text-amber-700"
          >
            <ArrowLeft
              size={16}
              className="mr-2 transition-transform group-hover:-translate-x-1"
            />{' '}
            {dict.News.backToHome || 'Back to Home'}
          </Link>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-amber-500 tracking-widest uppercase">
              {post.category}
            </Badge>
            <h1 className="mb-8 text-4xl leading-[1.1] font-extrabold text-slate-900 uppercase md:text-6xl">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 border-y border-slate-100 py-6 text-sm font-bold tracking-wider text-slate-500 uppercase"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-amber-500" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-amber-500" /> {post.author}
            </div>
            <div className="ml-auto hidden sm:block">
              PT. Wartiwan Industri Nusantara
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTENT ARTICLE */}
      <div className="container mx-auto px-6">
        <article>
          {post.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="mb-8 text-justify text-lg leading-relaxed text-slate-600 antialiased md:text-xl"
            >
              {paragraph}
            </motion.p>
          ))}
        </article>
      </div>

      {/* OTHER NEWS - HORIZONTAL SCROLL */}
      <section className="mt-32 overflow-hidden bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <p className="mb-2 text-xs font-bold tracking-widest text-amber-500 uppercase">
                {dict.News.readMore}
              </p>
              <h2 className="text-3xl font-bold tracking-tighter text-slate-900 uppercase">
                Other <span className="text-amber-500">Insights</span>
              </h2>
            </div>
          </motion.div>

          <div className="no-scrollbar flex snap-x gap-8 overflow-x-auto scroll-smooth pb-8">
            {otherPosts.map((other, idx) => (
              <motion.div
                key={other.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={`/news/${other.id}`}
                  className="group block min-w-[320px] snap-start rounded-xl border border-slate-100 bg-white transition-all hover:shadow-xl hover:shadow-slate-200/50 md:min-w-[420px]"
                >
                  <div className="relative h-60 overflow-hidden rounded-t-xl">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 border-none bg-white/90 text-slate-900 backdrop-blur">
                      {other.category}
                    </Badge>
                  </div>
                  <div className="flex flex-col p-4">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      <Calendar size={12} className="text-amber-500" />{' '}
                      {other.date}
                    </div>
                    <h4 className="line-clamp-2 text-xl leading-tight font-bold text-slate-900 uppercase transition-colors group-hover:text-amber-600">
                      {other.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}