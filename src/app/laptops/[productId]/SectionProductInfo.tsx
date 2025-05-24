import type { FC } from 'react';
import React from 'react';

import ProductInfoTab from './ProductInfoTab';
import Ratings from './Ratings';

interface SectionProductInfoProps {
  overview: string;
  ourThoughts: {
    title: string;
    description: string;
    key: string;
  }[];
  tech_specs: {
    title: string;
    description: string;
    key: string;
  }[];
  ratings: number;
}

const SectionProductInfo: FC<SectionProductInfoProps> = ({
  overview,
  ourThoughts,
  tech_specs,
  ratings,
}) => {
  return (
    <div className="grid gap-16 lg:grid-cols-2">
      <ProductInfoTab
        overview={overview}
        ourThoughts={ourThoughts}
        tech_specs={tech_specs}
      />
      <Ratings rating={ratings} />
    </div>
  );
};

export default SectionProductInfo;
