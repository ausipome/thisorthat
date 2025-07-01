'use client';

import { Skeleton } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useState } from 'react';

import type { ProductType } from '@/data/types';

interface ProductCardProps {
  product: ProductType;
  className?: string;
  showPrevPrice?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  className,
  showPrevPrice = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`transitionEffect relative rounded-2xl p-3 shadow-md ${className}`}
    >
      <div className="h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]">
        {product.ourPick && (
          <div className="absolute left-6 top-0 z-10 rounded-b-lg bg-primary px-3 py-2 text-sm uppercase text-white shadow-md">
            Our Top Pick
          </div>
        )}
        <Link
          className="h-[250px] w-full lg:h-[220px]"
          href={`/laptops/${product.slug}`}
        >
          <div className="relative size-full">
            {/** Skeleton while loading */}
            {isLoading && <Skeleton className="absolute inset-0 size-full" />}
            <Image
              width={600}
              height={600}
              src={product.coverImage}
              alt={`${product.name} cover photo`}
              className={`size-full bg-white object-contain object-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        </Link>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">{product.name}</h3>

        <div className="mt-2 flex items-center justify-between">
          {product.refurbishedPrice > 0 && (
            <p className="rounded-full bg-yellow-100 p-2 text-sm text-blue-500">
              Refurbished From £{product.refurbishedPrice}
            </p>
          )}
          <div
            className={`flex flex-col items-end ${product.refurbishedPrice === 0 ? 'ml-auto' : ''}`}
          >
            {showPrevPrice && product.previousPrice > 0 && (
              <p className="text-sm text-neutral-500 line-through">
                £{product.previousPrice}
              </p>
            )}
            {product.currentPrice > 0 && (
              <p className="text-lg font-bold text-primary">
                £{product.currentPrice}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
