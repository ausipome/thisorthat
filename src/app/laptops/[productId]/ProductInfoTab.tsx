'use client';

import type { FC } from 'react';
import React, { useState } from 'react';

import { note } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

interface ProductInfoTabProps {
  overview: string;
  ourThoughts: {
    icon: JSX.Element;
    title: string;
    description: string;
    key: string;
  }[];
  tech_specs: {
    icon: JSX.Element;
    title: string;
    description: string;
    key: string;
  }[];
}

const tabs = ['Overview', 'Tech Specs', 'What We Think'];

const ProductInfoTab: FC<ProductInfoTabProps> = ({
  overview,
  ourThoughts,
  tech_specs,
}) => {
  const [activeTab, setActiveTab] = useState('What We Think');

  return (
    <div>
      <Heading className="mb-0">Product Info</Heading>

      <div className="mb-10 flex items-center gap-5">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 ${
              activeTab === tab
                ? 'border-b-2 border-primary'
                : 'text-neutral-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
  <div
    key={tab}
    className={`mb-10 ${activeTab === tab ? 'block' : 'hidden'}`}
  >
    {activeTab === 'Overview' ? (
      <p>{overview}</p>
    ) : activeTab === 'Tech Specs' ? (
      <div className="grid gap-5 md:grid-cols-2">
        {tech_specs.map((spec) => (
          <div key={spec.key} className="flex items-center gap-2">
            {spec.icon}
            <div>
              <p className="text-sm text-neutral-500">{spec.title}</p>
              <p>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
    ) : activeTab === 'What We Think' ? (
      <div className="">
        {ourThoughts.map((thought) => (
          <div key={thought.key} className="flex items-center gap-2">
            {thought.icon}
            <div className='py-4'>
              <p className="text-sm text-neutral-500">{thought.title}</p>
              <p>{thought.description}</p>
            </div>
          </div>
        ))}
      </div>
    ) : null}
  </div>
))}

      <div className="space-y-2">
        <h3 className="text-xl font-medium">Our Promise</h3>
        <p className="text-neutral-500">{note}</p>
      </div>
    </div>
  );
};

export default ProductInfoTab;
