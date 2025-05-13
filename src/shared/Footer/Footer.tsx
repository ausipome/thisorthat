import Link from 'next/link';
import React from 'react';

import { footerData } from '@/data/content';

import Logo from '../Logo/Logo';
import FooterBanner from './FooterBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-515ba5c52c/icons';

const Footer: React.FC = () => {
  return (
    <div>
  <div className="container mb-10">
    <FooterBanner />
  </div>

  <div className="bg-black text-white">
    <div className="container grid gap-10 py-16 lg:grid-cols-3">
      {/* Column 1: Logo + Description */}
      <div className="space-y-10 md:pr-20">
        <Logo />
        <p>{footerData.description}</p>
         <p className="text-xl text-slate-400">© thisorthat.tech</p>
      </div>

      {/* Column 2: Links */}
      <div className="space-y-5">
        <h4 className="text-2xl font-medium">
          {footerData.footerLinks[0]?.title}
        </h4>
        {footerData.footerLinks[0]?.links.map((link) => (
          <div key={link.name}>
            <Link className='hover:text-yellow-400' href={link.href}>{link.name}</Link>
          </div>
        ))}
      </div>

      {/* Column 3: Social Icons */}
<div className="space-y-5">
  <Link className='hover:text-yellow-400' href='mailto:hello@thisorthat.tech'><h3 className="text-xl font-medium">Hello@thisorthat.tech</h3></Link>
  <h4 className="text-2xl font-medium text-slate-400">Follow Us</h4>
  <div className="grid grid-cols-2 gap-4 w-1/3">
    <Link
      className="text-white hover:text-yellow-400"
      href="https://www.instagram.com/thisorthat.tech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={byPrefixAndName.fab['instagram']}
        style={{ fontSize: '1rem' }}
      />
    </Link>
    <Link
      className="text-white hover:text-yellow-400"
      href="https://www.tiktok.com/@thisorthat.tech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={byPrefixAndName.fab['tiktok']}
        style={{ fontSize: '1rem' }}
      />
    </Link>
  </div>
</div>

    </div>
  </div>
</div>

  );
};

export default Footer;
