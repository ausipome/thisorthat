import React from 'react';

import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import { productsSection, laptops } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

const SectionProducts = () => {
  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>
      <Filter />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {laptops.map((laptop) => (
          <ProductCard
            key={laptop.name}
            product={laptop}
            className="border-neutral-300"
          />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionProducts;
