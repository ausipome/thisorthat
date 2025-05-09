import Link from 'next/link';
import React from 'react';

import { footerData } from '@/data/content';

import Logo from '../Logo/Logo';
import FooterBanner from './FooterBanner';
import Subscribe from './Subscribe';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="container mb-10">
        <FooterBanner />
      </div>

      <div className="bg-black text-white">
        <div className="container grid gap-10 py-16 lg:grid-cols-2 lg:gap-0">
          <div className="space-y-10 md:pr-20">
            <Logo />
            <p className="">{footerData.description}</p>
          </div>

            <div className="space-y-5 ml-50">
              <h4 className="text-2xl font-medium">
                {footerData.footerLinks[0]?.title}
              </h4>
              {footerData.footerLinks[0]?.links.map((link) => (
                <div key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
           
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
