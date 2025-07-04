import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import PromoTag from '@/components/PromoTag';
import { headerSection } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

const SectionHeader = () => {
  return (
    <div className="container items-stretch gap-y-5 lg:flex lg:gap-5 lg:gap-y-0">
      <div className="basis-[68%] items-center space-y-10 rounded-2xl bg-white p-5 md:flex md:space-y-0 ">
        <div className="basis-[63%]">
          <h4 className="mb-5 text-xl font-medium text-primary">
            {headerSection.title}
          </h4>
          <h1
            className="text-[50px] font-medium tracking-tight"
            style={{ lineHeight: '1em' }}
          >
            {headerSection.heading}
          </h1>
          <p className="my-10 w-4/5 text-neutral-500">
            {headerSection.description}
          </p>
          <ButtonPrimary sizeClass="px-5 py-4">
            <Link href="/thisorthat">Learn More</Link>
          </ButtonPrimary>
        </div>
        <div className="basis-[37%]">
          <Image
            src="https://s3.eu-west-2.amazonaws.com/thisorthat.tech/images/Asus/ZenbookS14OLED/oled5.webp"
            width={600}
            height={600}
            alt="Buy Laptop"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-5 basis-[30%] lg:mt-0">
        <PromoTag />
      </div>
    </div>
  );
};

export default SectionHeader;
