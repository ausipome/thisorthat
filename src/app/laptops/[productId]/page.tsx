import { pathOr } from 'ramda';
import React from 'react';

import SectionMoreProducts from './SectionMoreProducts';
import SectionProductHeader from './SectionProductHeader';
import SectionProductInfo from './SectionProductInfo';

type Props = {
  params: { productId: string };
};

const getProductData = async (id: string) => {
  const res = await fetch('https://getpaidontheweb.com/get-laptop-data', {
    cache: 'no-store',
  });
  const laptops = await res.json();
  const filteredDestination = laptops.find((item: any) => item.slug === id);
  return filteredDestination;
};

const SingleProductPage = async (props: Props) => {
  const selectedProduct = await getProductData(props.params.productId);

  return (
    <div className="container">
      <div className="my-20">
        <SectionProductHeader
          link={pathOr('', ['link'], selectedProduct)}
          shots={pathOr([], ['shots'], selectedProduct)}
          name={pathOr('', ['name'], selectedProduct)}
          prevPrice={pathOr(0, ['previousPrice'], selectedProduct)}
          currentPrice={pathOr(0, ['currentPrice'], selectedProduct)}
          refurbishedLink={pathOr('', ['refurbishedLink'], selectedProduct)}
          refurbishedPrice={pathOr(0, ['refurbishedPrice'], selectedProduct)}
          rating={pathOr(0, ['rating'], selectedProduct)}
        />
      </div>

      <div className="mb-28">
        <SectionProductInfo
          overview={pathOr('', ['overview'], selectedProduct)}
          key={pathOr('', ['key'], selectedProduct)}
          tech_specs={pathOr([], ['tech_specs'], selectedProduct)}
          ourThoughts={pathOr([], ['ourThoughts'], selectedProduct)}
          ratings={pathOr(0, ['rating'], selectedProduct)}
        />
      </div>

      <div className="mb-28">
        <SectionMoreProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
