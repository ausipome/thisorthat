import React from 'react';

import BrandCard from '@/components/BrandCard';
import { brandsSection } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

const SectionBrands = () => {
  return (
    <div className="container">
      <Heading desc={brandsSection.description} isCenter isMain>
        {brandsSection.heading}
      </Heading>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {brandsSection.brands.map((brand) => (
          <BrandCard key={brand.brandName} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default SectionBrands;
