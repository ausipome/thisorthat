import Link from 'next/link';
import React from 'react';

import { footerBannerData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import ButtonPrimary from '../Button/ButtonPrimary';

const FooterBanner = () => {
  return (
    <div className="rounded-2xl bg-[url('https://s3.eu-west-2.amazonaws.com/thisorthat.tech/images/blog/laptops.png')] bg-cover bg-center bg-no-repeat py-16 text-white">
      <Heading className="mb-0" isMain isCenter>
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-4/5 rounded-lg bg-white/70 py-5 text-center text-[20px] text-slate-700 md:w-[50%]">
        {footerBannerData.description}
      </p>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/about">
          <ButtonPrimary sizeClass="px-6 py-4">
            How can we help you?
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
