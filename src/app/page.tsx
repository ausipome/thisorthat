import React from 'react';

import SectionBrands from './SectionBrands';
import SectionHeader from './SectionHeader';
import SectionProducts from './SectionProducts';
import AimeChat from '@/components/AimeChat';

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
