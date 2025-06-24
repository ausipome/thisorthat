'use client';

import React, { useEffect, useState } from 'react';

import ProductCard from '@/components/ProductCard';
import SidebarFilters from '@/components/SideBarFilter';

import SectionBrands from '../SectionBrands';

const Page = () => {
  const [laptops, setLaptops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeOs, setActiveOs] = useState('All');
  const [activeUser, setActiveUser] = useState('All');
  const [rangePrices, setRangePrices] = useState<number[]>([1, 5000]);

  const [minPrice = 0, maxPrice = Infinity] = rangePrices;

  useEffect(() => {
    fetch('https://getpaidontheweb.com/get-laptop-data', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setLaptops(data);
        setLoading(false);
      });
  }, []);

  const filteredLaptops = laptops.filter((item) => {
    const matchesOS = activeOs === 'All' || item.tags.includes(activeOs);
    const matchesUser = activeUser === 'All' || item.tags.includes(activeUser);
    const matchesPrice =
      (item.currentPrice || item.refurbishedPrice) >= minPrice &&
      (item.currentPrice || item.refurbishedPrice) <= maxPrice;
    return matchesOS && matchesUser && matchesPrice;
  });

  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters
            activeOs={activeOs}
            setActiveOs={setActiveOs}
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            rangePrices={rangePrices}
            setRangePrices={setRangePrices}
          />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1 pt-10">
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {loading ? (
              <div>Loading...</div>
            ) : (
              filteredLaptops.map((item) => (
                <ProductCard showPrevPrice product={item} key={item.slug} />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="my-24">
        <SectionBrands />
      </div>
    </div>
  );
};

export default Page;
