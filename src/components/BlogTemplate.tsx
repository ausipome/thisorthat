'use client';

import { Skeleton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogTemplateProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
}

const MarkdownLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
  ...props
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800"
    {...props}
  >
    {children}
  </a>
);

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  title,
  author,
  date,
  content,
  image,
}) => {
  const [isImageLoading, setIsImageLoading] = React.useState(true);
  return (
    <div className="mx-auto my-8 max-w-5xl rounded-2xl bg-white px-4 py-8 shadow-md">
      {/* Blog Header */}
      <header className="mb-6 text-center">
        {image && (
          <div className="relative mb-4 h-auto max-h-[600px] w-full overflow-hidden rounded-xl">
            {isImageLoading && (
              <Skeleton className="absolute inset-0 size-full" />
            )}
            <Image
              src={image}
              alt={title}
              width={1000}
              height={600}
              className={`h-auto w-full object-cover transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{ maxHeight: 600, width: '100%', height: 'auto' }}
              priority
              onLoadingComplete={() => setIsImageLoading(false)}
            />
          </div>
        )}
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <div className="text-gray-500 text-sm">
          <span>{author}</span> • <span>{date}</span>
        </div>
      </header>

      {/* Blog Content */}
      <main className="prose prose-base max-w-none md:prose-lg">
        <ReactMarkdown
          components={{
            a: MarkdownLink,
          }}
        >
          {content}
        </ReactMarkdown>
      </main>

      {/* Blog Footer */}
      <footer className="text-gray-400 mt-10 text-center text-sm" />
    </div>
  );
};

export default BlogTemplate;
