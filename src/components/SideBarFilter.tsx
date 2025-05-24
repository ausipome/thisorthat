'use client';

import 'rc-slider/assets/index.css';

import Slider from 'rc-slider';
import React from 'react';

import Heading from '@/shared/Heading/Heading';

const OS = [{ name: 'All' }, { name: 'MacOS' }, { name: 'Windows' }];

const userTypes = [
  'All',
  'Basic',
  'Student',
  'Creative',
  'Business',
  'Developer',
  'Gaming',
];

const PRICE_RANGE = [1, 5000];

type SidebarFiltersProps = {
  activeOs: string;
  setActiveOs: (value: string) => void;
  activeUser: string;
  setActiveUser: (value: string) => void;
  rangePrices: number[];
  setRangePrices: (value: number[]) => void;
};

const SidebarFilters = ({
  activeOs,
  setActiveOs,
  activeUser,
  setActiveUser,
  rangePrices,
  setRangePrices,
}: SidebarFiltersProps) => {
  const renderTabsCategories = () => (
    <div className="relative flex flex-col space-y-4 pb-8">
      <h3 className="mb-2.5 text-xl font-medium">Operating System</h3>
      <div className="grid grid-cols-2 gap-4">
        {OS.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveOs(item.name)}
            className={`rounded-lg py-4 ${
              activeOs === item.name ? 'bg-primary text-white' : 'bg-gray'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );

  const renderTabsUserType = () => (
    <div className="relative flex flex-col space-y-4 py-8">
      <h3 className="mb-2.5 text-xl font-medium">Use Type</h3>
      <div className="grid grid-cols-2 gap-4">
        {userTypes.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActiveUser(item)}
            className={`rounded-lg py-4 ${
              activeUser === item ? 'bg-primary text-white' : 'bg-gray'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  const renderTabsPriceRange = () => (
    <div className="relative flex flex-col space-y-5 py-8 pr-3">
      <div className="space-y-5">
        <span className="font-semibold">Price range</span>
        <Slider
          range
          min={PRICE_RANGE[0]}
          max={PRICE_RANGE[1]}
          step={1}
          value={rangePrices}
          allowCross={false}
          onChange={(input) => {
            if (Array.isArray(input)) {
              setRangePrices(input);
            }
          }}
        />
      </div>

      {rangePrices.length === 2 && (
        <div className="flex justify-between space-x-5">
          <div>
            <div className="block text-sm font-medium">Min price</div>
            <div className="relative mt-1 rounded-md">
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                $
              </span>
              <input
                type="text"
                name="minPrice"
                disabled
                id="minPrice"
                className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
                value={rangePrices[0]}
              />
            </div>
          </div>
          <div>
            <div className="block text-sm font-medium">Max price</div>
            <div className="relative mt-1 rounded-md">
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                $
              </span>
              <input
                type="text"
                disabled
                name="maxPrice"
                id="maxPrice"
                className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
                value={rangePrices[1]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="top-28 lg:sticky">
      <Heading className="mb-0">Filter products</Heading>
      <div className="divide-y divide-neutral-300">
        {renderTabsCategories()}
        {renderTabsUserType()}
        {renderTabsPriceRange()}
      </div>
    </div>
  );
};

export default SidebarFilters;
