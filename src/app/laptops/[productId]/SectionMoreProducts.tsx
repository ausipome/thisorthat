import React from 'react';

import ProductCard from '@/components/ProductCard';
import Heading from '@/shared/Heading/Heading';

const SectionMoreProducts = async () => {
  const res = await fetch('https://getpaidontheweb.com/get-laptop-data', {
    cache: 'no-store',
  });
  const laptops = await res.json();

  return (
    <div>
      <Heading className="mb-0">Explore more products</Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {laptops.slice(4, 13).map((laptop: any) => (
          <ProductCard
            key={laptop.name}
            product={laptop}
            className="border-neutral-300"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionMoreProducts;
