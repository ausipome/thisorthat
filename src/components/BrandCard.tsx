import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { MdStar } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

import ButtonSecondary from '@/shared/Button/ButtonSecondary';

interface BrandCardProps {
  brandName: string;
  rating: number;
  visitLink: string;
  logo: StaticImageData;
  laptops: StaticImageData[];
}

const BrandCard: FC<BrandCardProps> = ({
  brandName,
  rating,
  visitLink,
  logo,
  laptops,
}) => {
  return (
    <div className="rounded-2xl border border-neutral-300 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-20 w-20 overflow-hidden rounded-lg">
            <Image
              src={logo}
              alt="logo"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-lg font-medium">
              {brandName} <PiSealCheckFill className="text-blue-600" />
            </h3>
            <div className="flex items-center gap-1">
              <MdStar className="text-yellow-400" />
              <p className="text-sm">
                {rating}{' '}
              </p>
            </div>
          </div>
        </div>

        <ButtonSecondary
          className="border-2 border-primary text-primary"
          href={visitLink}
        >
          Visit
        </ButtonSecondary>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {laptops.map((laptop) => (
          <div
            key={laptop.src}
            className="h-[150px] overflow-hidden rounded-lg bg-gray"
          >
            <Image
              src={laptop}
              alt="Laptop"
              className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
