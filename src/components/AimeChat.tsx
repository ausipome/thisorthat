'use client';

import { useState, FormEvent } from 'react';

interface Product {
  title: string;
  image: string;
  link: string;
  price: number;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  product?: Product;
  products?: Product[];
}

export default function AimeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const res = await fetch('http://localhost:8080/aime-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const assistantMessage: Message = data.reply;

    setMessages((prev) => [...prev, assistantMessage]);
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`rounded p-3 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-blue-100'}`}>
            <p className="mb-2">{msg.content}</p>
            {msg.product && (
              <ul className="space-y-4">
                <li className="border rounded-lg p-4 flex items-start gap-4 bg-white shadow-sm">
                  <img src={msg.product.image} alt={msg.product.title} className="w-28 rounded" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{msg.product.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">£{msg.product.price}</p>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
                      onClick={() => window.open(msg.product?.link, '_blank')}
                    >
                      Buy Now
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Ask Aimee for a laptop..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
