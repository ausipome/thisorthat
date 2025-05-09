import React from 'react';
import ProductCard from '@/components/ProductCard';
import { productsSection, laptops } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';
import Link from 'next/link';

const SectionProducts = () => {
  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
      {laptops.slice(0, 12).map((laptop) => (
          <ProductCard
            key={laptop.name}
            product={laptop}
            className="border-neutral-300"
          />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <Link href='/laptops'><ButtonPrimary>View All Laptops</ButtonPrimary></Link>
      </div>
    </div>
  );
};

export default SectionProducts;
