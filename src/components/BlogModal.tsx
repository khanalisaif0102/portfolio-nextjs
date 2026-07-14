import React from 'react';
import Image from 'next/image';
import { BlogArticle } from '@/types';
import { Button } from './Button';
import { BaseModal } from './BaseModal';

interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

/**
 * BlogModal
 *
 * Displays the full content of a selected blog article: cover image,
 * category, date, title, and body text. The shared backdrop, escape-key
 * handling, and close button all live in BaseModal — this component only
 * defines the article-specific content.
 */
export const BlogModal: React.FC<BlogModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <BaseModal onClose={onClose}>
      <div className="relative h-64 md:h-80">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
            {article.category}
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">{article.date}</span>
        </div>

        <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {article.title}
        </h2>

        <div
          className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-8">
          <Button onClick={onClose}>Close Article</Button>
        </div>
      </div>
    </BaseModal>
  );
};
