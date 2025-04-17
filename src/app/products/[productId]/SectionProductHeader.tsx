import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { MdStar } from 'react-icons/md';

import ImageShowCase from '@/components/ImageShowCase';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

interface SectionProductHeaderProps {
  shots: StaticImageData[];
  link:string,
  refurbishedLink:string,
  name: string;
  prevPrice: number;
  currentPrice: number;
  refurbishedPrice: number;
  rating: number;
}

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  link,
  shots,
  name,
  prevPrice,
  currentPrice,
  refurbishedLink,
  refurbishedPrice,
  rating,
}) => {
  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[50%]">
        <ImageShowCase shots={shots} />
      </div>

      <div className="basis-[45%]">
        <Heading className="mb-0" isMain title="">
          {name}
        </Heading>

        <div className="mb-10 flex items-center">
          <div className="flex items-center gap-1">
            <MdStar className="text-yellow-400" />
            <p className="text-sm">
              {rating}{' '}
            </p>
          </div>
        </div>

        {currentPrice !== 0 && (
          <div className="mb-5 space-y-1">
            <p className="text-neutral-500 line-through">${prevPrice}</p>
            <h1 className="text-3xl font-medium">${currentPrice}</h1>
          </div>
        )}

        <div className="mt-5 flex items-center gap-5">
          {currentPrice !== 0 && (
            <ButtonPrimary link={link} className="w-full">Buy Now</ButtonPrimary>
          )}
          {refurbishedPrice !== 0 && (
            <ButtonSecondary link={refurbishedLink} className="w-full">Buy Refurbished ${refurbishedPrice}</ButtonSecondary>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
