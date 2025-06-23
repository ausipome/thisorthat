'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Product {
  title: string;
  image: string;
  link: string;
  price: number;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  products?: Product[];
}

export default function AimeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const res = await fetch('http://localhost:8080/aime-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    const assistantMessage: Message = data.reply;

    setMessages((prev) => [...prev, assistantMessage]);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="mb-4 flex flex-col items-center">
        <img
          src="/gee-giraffe.png"
          alt="Gee the Giraffe Influencer"
          className="w-72 rounded-xl shadow-md"
        />
        <h2 className="text-gray-800 mt-2 text-center font-serif text-2xl font-bold">
          Meet Gee — Searching high and high to find your perfect tech!
        </h2>
      </div>

      <div className="mb-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap rounded p-3 text-sm shadow-sm transition-all duration-300 ${
              msg.role === 'user'
                ? 'bg-gray-100 text-gray-800 self-end'
                : 'bg-blue-100'
            }`}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ node, ...props }) => (
                  <a
                    {...props}
                    className="text-blue-600 underline hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            >
              {msg.content}
            </ReactMarkdown>

            {(msg.products?.length ?? 0) > 0 && (
              <ul className="mt-2 space-y-4">
                {msg.products!.map((product, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 rounded-lg border bg-white p-4 shadow-sm"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-28 rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <p className="text-gray-600 mb-2 text-sm">
                        £{product.price}
                      </p>
                      <button
                        className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                        onClick={() => window.open(product.link, '_blank')}
                      >
                        Buy Here
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex w-fit animate-pulse items-center gap-2 rounded bg-blue-100 p-3">
            <span className="size-2 animate-bounce rounded-full bg-blue-500 [animation-delay:0ms]" />
            <span className="size-2 animate-bounce rounded-full bg-blue-500 [animation-delay:200ms]" />
            <span className="size-2 animate-bounce rounded-full bg-blue-500 [animation-delay:400ms]" />
            <span className="text-gray-700 ml-2 text-sm">
              Gee is thinking...
            </span>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded border p-2"
          placeholder="What tech are you looking for? Ask Gee..."
          disabled={loading}
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}
