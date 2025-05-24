'use client';

import type { FC } from 'react';
import React, { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { note } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

interface ProductInfoTabProps {
  overview: string;
  ourThoughts: {
    title: string;
    description: string;
    key: string;
  }[];
  tech_specs: {
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

  const renderTabContent = () => {
    if (activeTab === 'Overview') {
      return <p>{overview}</p>;
    }
    if (activeTab === 'Tech Specs') {
      return (
        <div className="grid gap-5 md:grid-cols-2">
          {tech_specs.map((spec) => (
            <div key={spec.key} className="flex items-center gap-2">
              <BsCircleFill className="text-xl text-secondary" />
              <div>
                <p className="text-sm text-neutral-500">{spec.title}</p>
                <p>{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (activeTab === 'What We Think') {
      return (
        <div>
          {ourThoughts.map((thought) => (
            <div key={thought.key} className="flex items-center gap-2">
              <div className="py-4">
                <p className="text-sm text-neutral-500">{thought.title}</p>
                <p>{thought.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

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

      <div className="mb-10">{renderTabContent()}</div>

      <div className="space-y-2">
        <h3 className="text-xl font-medium">Our Promise</h3>
        <p className="text-neutral-500">{note}</p>
      </div>
    </div>
  );
};

export default ProductInfoTab;
