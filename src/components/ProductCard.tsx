import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
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
  return (
    <div
      className={`transitionEffect relative rounded-2xl p-3 shadow-md ${className}`}
    >
      <div className="h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]">
        {product.ourPick && (
          <div className="absolute left-6 top-0 rounded-b-lg bg-primary px-3 py-2 text-sm uppercase text-white shadow-md">
            Our Top Pick
          </div>
        )}
        <Link
          className="h-[250px] w-full lg:h-[220px]"
          href={`/laptops/${product.slug}`}
        >
          <Image
          width={1000}
          height={1000}
            src={product.coverImage}
            alt={`${product.name} cover photo`}
            className="h-full w-full object-cover object-bottom"
          />
        </Link>
      </div>
      <div className="mt-3">
  <h3 className="font-semibold">{product.name}</h3>

  <div className="flex items-center justify-between mt-2">
    {product.refurbishedPrice > 0 && (
      <p className="text-sm text-blue-500 p-2 bg-yellow-100 rounded-full">
        Refurbished From £{product.refurbishedPrice}
      </p>
    )}
    <div className={`flex flex-col items-end ${product.refurbishedPrice === 0 ? 'ml-auto' : ''}`}>
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
