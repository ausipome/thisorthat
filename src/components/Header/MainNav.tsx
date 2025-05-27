'use client';

import React, { useEffect, useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import Search from '@/components/Search';
import Logo from '@/shared/Logo/Logo';

import MenuBar from './MenuBar';

const MainNav = () => {
  const [laptops, setLaptops] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/get-laptop-data', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  return (
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-3/5">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center rounded-full border border-neutral-300 px-3 py-1 lg:flex">
          <Search laptops={laptops} />
          <RiSearch2Line className="ml-auto text-2xl text-neutral-500" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="relative hidden lg:block" />

        <div className="flex items-center divide-x divide-neutral-300">
          <div className="flex items-center gap-2 pl-5" />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
