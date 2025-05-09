import React from 'react';

import { footerBannerData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import ButtonPrimary from '../Button/ButtonPrimary';
import Link from 'next/link';

const FooterBanner = () => {
  return (
    <div className="rounded-2xl bg-[url('/laptops.png')] bg-cover bg-center bg-no-repeat py-16 text-white">
      <Heading className="mb-0" isMain isCenter>
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-[80%] text-center md:w-[50%] bg-white/70 text-slate-700 py-5 rounded-lg text-[20px]">
        {footerBannerData.description}
      </p>
      <div className="mt-10 flex items-center justify-center">
        <Link href='/about'><ButtonPrimary sizeClass="px-6 py-4">How can we help you?</ButtonPrimary></Link>
      </div>
    </div>
  );
};

export default FooterBanner;
