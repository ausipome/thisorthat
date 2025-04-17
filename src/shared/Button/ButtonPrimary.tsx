"use client";

import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  link?: string; 
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  link,
  className = '',
  ...args
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button
      className={`rounded-full bg-primary text-white hover:bg-primary/80 disabled:bg-opacity-70 ${className}`}
      onClick={handleClick}
      {...args}
    />
  );
};

export default ButtonPrimary;