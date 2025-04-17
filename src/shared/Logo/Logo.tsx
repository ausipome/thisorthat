import Link from 'next/link';
import Image from 'next/image'; 
import type { FC } from 'react';
import React from 'react';



const Logo: FC= () => {
  return (
    <Link className={`flex cursor-pointer items-center gap-2`} href="/">
      <Image 
        src="/thisorthattech-logo.png" 
        alt="Logo"
        width={300} 
        height={75} 
      />
    </Link>
  );
};

export default Logo;