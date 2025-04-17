"use client";

import React from 'react';

import type { ButtonProps } from '@/shared/Button/Button';
import Button from '@/shared/Button/Button';

export interface ButtonPrimaryProps extends ButtonProps {
  link?: string; 
}

const ButtonSecondary: React.FC<ButtonPrimaryProps> = ({
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
      className={`rounded-full bg-yellow-300 text-blue-500 hover:bg-yellow-200 disabled:bg-opacity-70 ${className}`}
      onClick={handleClick}
      {...args}
    />
  );
};

export default ButtonSecondary;


