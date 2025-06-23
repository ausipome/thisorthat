'use client';

import { useState, FormEvent } from 'react';
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
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col items-center mb-4">
        <img 
          src="/gee-giraffe.png" 
          alt="Gee the Giraffe Influencer" 
          className="w-72 rounded-xl shadow-md"
        />
        <h2 className="mt-2 text-2xl font-bold text-center text-gray-800 font-serif">
          Meet Gee — Searching high and high to find your perfect tech!
        </h2>
      </div>

      <div className="space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`rounded p-3 text-sm whitespace-pre-wrap shadow-sm transition-all duration-300 ${
              msg.role === 'user' ? 'bg-gray-100 text-gray-800 self-end' : 'bg-blue-100'
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
              <ul className="space-y-4 mt-2">
                {msg.products!.map((product, index) => (
                  <li
                    key={index}
                    className="border rounded-lg p-4 flex items-start gap-4 bg-white shadow-sm"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-28 rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">£{product.price}</p>
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
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
          <div className="flex items-center gap-2 p-3 bg-blue-100 rounded w-fit animate-pulse">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:200ms]" />
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:400ms]" />
            <span className="text-sm text-gray-700 ml-2">Gee is thinking...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="What tech are you looking for? Ask Gee..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}