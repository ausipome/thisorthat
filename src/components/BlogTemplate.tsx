'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogTemplateProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ title, author, date, content, image }) => {

  console.log('Content Preview:', content);
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white shadow-md rounded-2xl my-8">
      {/* Blog Header */}
      <header className="text-center mb-6">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-xl mb-4 object-cover max-h-[400px]"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <div className="text-sm text-gray-500">
          <span>{author}</span> • <span>{date}</span>
        </div>
      </header>

      {/* Blog Content */}
      <main className="prose prose-base md:prose-lg max-w-none">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                {children}
              </a>
            )
          }}
        >
          {content}
        </ReactMarkdown>
      </main>

      {/* Blog Footer */}
      <footer className="mt-10 text-center text-sm text-gray-400">
      </footer>
    </div>
  );
};

export default BlogTemplate;
