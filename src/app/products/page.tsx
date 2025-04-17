import React from 'react';
import { MdSearch } from 'react-icons/md';

import ProductCard from '@/components/ProductCard';
import SidebarFilters from '@/components/SideBarFilter';
import { laptops } from '@/data/content';
import Input from '@/shared/Input/Input';

import SectionBrands from '../SectionBrands';

const page = () => {
  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-neutral-300 px-4">
              <MdSearch className="text-2xl text-neutral-500" />
              <Input
                type="password"
                rounded="rounded-full"
                placeholder="Search..."
                sizeClass="h-12 px-0 py-3"
                className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {laptops.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-24">
        <SectionBrands />
      </div>
    </div>
  );
};

export default page;
