import React from 'react';

import AimeChat from '@/components/AimeChat';

import SectionBrands from './SectionBrands';
import SectionHeader from './SectionHeader';
import SectionProducts from './SectionProducts';

const page = () => {
  return (
    <div>
      
      <div className="mb-24 mt-12">
        <AimeChat />
      </div>

      <div className="my-7">
        <SectionHeader />
      </div>

      <div className="mb-32">
        <SectionProducts />
      </div>

      <div className="mb-32">
        <SectionBrands />
      </div>
    </div>
  );
};

export default page;
