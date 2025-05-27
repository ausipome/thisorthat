'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import ProductCard from '@/components/ProductCard';
import { productsSection } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

const SectionProducts = () => {
  const [laptops, setLaptops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/get-laptop-data', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setLaptops(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          laptops
            .slice(0, 12)
            .map((laptop) => (
              <ProductCard
                key={laptop.name}
                product={laptop}
                className="border-neutral-300"
              />
            ))
        )}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <Link href="/laptops">
          <ButtonPrimary>View All Laptops</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default SectionProducts;
