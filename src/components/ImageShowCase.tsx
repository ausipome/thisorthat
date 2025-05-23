'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { pathOr } from 'ramda';
import type { FC } from 'react';
import React, { useState } from 'react';

interface ImageShowCaseProps {
  shots: StaticImageData[];
}

const ImageShowCase: FC<ImageShowCaseProps> = ({ shots }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-3 rounded-2xl border border-neutral-300 p-2">
  <div className="relative overflow-hidden rounded-2xl md:h-[400px]">
    <Image
      width={1000}
      height={1000}
      src={pathOr('', [activeImageIndex], shots)}
      alt="tech image"
      className="h-full w-full object-contain object-center"
    />
  </div>
  <div className="grid grid-cols-4 gap-3">
    {shots.map((shot, index) => (
      <div
        key={shot.src}
        className={`${
          activeImageIndex === index ? 'border-2 border-primary' : ''
        } h-[100px] overflow-hidden rounded-lg`}
      >
        <button
          className="h-full w-full"
          type="button"
          onClick={() => setActiveImageIndex(index)}
        >
          <Image
          width={1000}
          height={1000}
            src={shot}
            alt="tech image"
            className="h-full w-full object-contain object-center"
          />
        </button>
      </div>
    ))}
  </div>
</div>
  );
};

export default ImageShowCase;
