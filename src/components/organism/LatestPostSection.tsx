'use client';

import { useDict } from '@/components/providers/DictionaryProvider';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { POSTS } from '@/data/post';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Typography } from '../ui/Typography';
import { Badge } from '../ui/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

const POSTS_PER_PAGE = 2;

export default function LatestPostSection() {
  const dict = useDict(); // Ambil data dictionary
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="relative w-full bg-white py-24" id="news">
      <div className="container mx-auto px-6">
        {/* Header dengan Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <Typography>
            <Typography.Kicker className="tracking-widest text-amber-500 uppercase">
              {dict.News.kicker}
            </Typography.Kicker>
            <Typography.Title className="text-4xl text-slate-900 md:text-5xl">
              {dict.News.title}{' '}
              <Typography.Highlight className="text-amber-500">
                {dict.News.titleHighlight}
              </Typography.Highlight>
            </Typography.Title>
          </Typography>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 h-1 rounded-full bg-slate-200"
          />
        </motion.div>

        {/* Grid Container */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {currentPosts.map((post, idx) => (
              <motion.div
                key={`${post.id}-${currentPage}`} // Key unik agar animasi trigger saat ganti page
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/news/${post.id}`} className="group">
                  <Card className="flex h-full flex-col overflow-hidden border border-slate-100 bg-slate-50/50 !p-0 shadow-none transition-all duration-300 group-hover:border-amber-200 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-200/50">
                    <div className="relative h-72 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <Badge className="absolute top-6 left-6 bg-amber-500 text-white">
                        {post.category}
                      </Badge>
                    </div>

                    <CardHeader className="space-y-3 p-8 pb-4">
                      <div className="flex items-center text-xs font-medium tracking-wider text-slate-400 uppercase">
                        <Calendar size={14} className="mr-2 text-amber-500" />{' '}
                        {post.date}
                      </div>
                      <h3 className="line-clamp-2 text-2xl leading-tight font-bold text-slate-900 uppercase transition-colors group-hover:text-amber-600">
                        {post.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="px-8">
                      <p className="line-clamp-3 leading-relaxed text-slate-600">
                        {post.excerpt}
                      </p>
                    </CardContent>

                    <CardFooter className="mt-auto p-8 pt-6">
                      <div className="flex items-center font-bold tracking-tighter text-amber-600 uppercase transition-all group-hover:translate-x-2">
                        {dict.News.readMore}{' '}
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={
                    currentPage === 1
                      ? 'pointer-events-none opacity-50'
                      : 'cursor-pointer select-none'
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1} className="hidden sm:inline-block">
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className="cursor-pointer select-none"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? 'pointer-events-none opacity-50'
                      : 'cursor-pointer select-none'
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </motion.div>
      </div>
    </section>
  );
}
