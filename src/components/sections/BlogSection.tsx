import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components';
import { BlogArticle } from '@/types';

interface BlogSectionProps {
  blogArticles: BlogArticle[];
  loading: boolean;
  onArticleClick: (article: BlogArticle) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blogArticles, loading, onArticleClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent, article: BlogArticle) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onArticleClick(article);
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 id="blog-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">Blog</h2>
        </ScrollReveal>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
                <div className="p-4 sm:p-6">
                  <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-4 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : blogArticles.length === 0 ? (
          <ScrollReveal delay={0.2}>
            <div className="text-center py-12">
              <div className="text-5xl sm:text-6xl mb-4">📝</div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">No blog articles yet.</p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {blogArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <div
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                  onClick={() => onArticleClick(article)}
                  onKeyDown={(e) => handleKeyDown(e, article)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Read article: ${article.title}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      loading="lazy"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2">{article.excerpt}</p>
                    <button className="mt-4 text-primary font-semibold text-sm sm:text-base hover:text-primary-dark transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
