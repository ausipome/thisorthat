import React from 'react';
import ReactDOM from 'react-dom';
import { RiSearch2Line } from 'react-icons/ri';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';
import MenuBar from './MenuBar';

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex">
          <Input
            type="text"
            className="border-transparent bg-white placeholder:text-neutral-500 focus:border-transparent"
            placeholder="try 'Lenovo ThinkPad'"
          />
          <RiSearch2Line className="text-2xl text-neutral-500" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="relative hidden lg:block">
        </div>

        <div className="flex items-center divide-x divide-neutral-300">
          <div className="flex items-center gap-2 pl-5">
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
