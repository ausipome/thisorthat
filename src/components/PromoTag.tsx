import React from 'react';

import { promotionTag } from '@/data/content';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Link from 'next/link';

const PromoTag = () => {
  return (
    <div className='relative h-full space-y-10 rounded-2xl bg-primary bg-[url("/mac-refurb.png")] bg-cover bg-center bg-no-repeat py-5 text-white'>
      <h1 className="text-[40px] font-medium px-5" style={{ lineHeight: '1em' }}>
        {promotionTag.heading}
      </h1>
      <p className="w-[100%] text-[20px] text-slate-700 bg-white/70 p-4">{promotionTag.description}</p>
      <ButtonSecondary className="bg-white text-primary ml-5" sizeClass="px-5 py-4">
      <Link href='/refurbished'>
        Read More
        </Link>
      </ButtonSecondary>
    </div>
  );
};

export default PromoTag;
