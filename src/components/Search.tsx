'use client';

import Link from 'next/link';
import React, { useRef, useState } from 'react';

import type { ProductType } from '@/data/types';

interface SearchProps {
  laptops: ProductType[];
}

const Search: React.FC<SearchProps> = ({ laptops }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLaptops, setFilteredLaptops] = useState<ProductType[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredLaptops([]);
      setIsDropdownVisible(false);
    } else {
      const matches = laptops.filter((laptop) =>
        laptop.name.toLowerCase().includes(term.toLowerCase()),
      );
      setFilteredLaptops(matches);
      setIsDropdownVisible(true);
    }
  };

  const handleResultClick = () => {
    setIsDropdownVisible(false);
    setSearchTerm(''); // Optional: Clear the input after selection
  };

  const handleBlur = () => {
    // Delay hiding dropdown to allow click events on results
    setTimeout(() => setIsDropdownVisible(false), 150);
  };

  const handleFocus = () => {
    if (filteredLaptops.length > 0) {
      setIsDropdownVisible(true);
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className="w-full border-none bg-transparent placeholder:text-neutral-500 focus:outline-none focus:ring-0"
        placeholder="try 'Lenovo ThinkPad'"
      />
      {isDropdownVisible && (
        <ul className="border-gray-300 absolute z-10 mt-2 w-full rounded-md border bg-white shadow-lg">
          {filteredLaptops.map((laptop) => (
            <li key={laptop.slug} className="hover:bg-gray-100 p-2">
              <Link
                className="text-gray-700 block text-sm"
                onClick={handleResultClick}
                href={`/laptops/${laptop.slug}`}
              >
                {laptop.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
