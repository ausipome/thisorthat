import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link className="flex cursor-pointer items-center gap-2" href="/">
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
