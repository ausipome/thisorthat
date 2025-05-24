import Link from 'next/link';
import React from 'react';

import { promotionTag } from '@/data/content';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const PromoTag = () => {
  return (
    <div className='relative h-full space-y-10 rounded-2xl bg-primary bg-[url("https://s3.eu-west-2.amazonaws.com/thisorthat.tech/images/blog/mac-refurb.png")] bg-cover bg-center bg-no-repeat py-5 text-white'>
      <h1
        className="px-5 text-[40px] font-medium"
        style={{ lineHeight: '1em' }}
      >
        {promotionTag.heading}
      </h1>
      <p className="w-full bg-white/70 p-4 text-[20px] text-slate-700">
        {promotionTag.description}
      </p>
      <ButtonSecondary
        className="ml-5 bg-white text-primary"
        sizeClass="px-5 py-4"
      >
        <Link href="/refurbished">Read More</Link>
      </ButtonSecondary>
    </div>
  );
};

export default PromoTag;
