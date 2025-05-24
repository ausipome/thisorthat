'use client';

import { Skeleton } from '@heroui/react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [thumbLoading, setThumbLoading] = useState<boolean[]>(() =>
    shots.map(() => true),
  );

  return (
    <div className="space-y-3 rounded-2xl border border-neutral-300 p-2">
      <div className="relative overflow-hidden rounded-2xl md:h-[400px]">
        {isLoading && <Skeleton className="absolute inset-0 size-full" />}
        <Image
          width={600}
          height={600}
          src={pathOr('', [activeImageIndex], shots)}
          alt="tech image"
          className={`size-full object-contain object-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {shots.map((shot, index) => (
          <div
            key={shot.src ?? index}
            className={`${
              activeImageIndex === index ? 'border-2 border-primary' : ''
            } h-[100px] overflow-hidden rounded-lg`}
          >
            <button
              className="size-full"
              type="button"
              onClick={() => {
                setActiveImageIndex(index);
                setIsLoading(true);
              }}
            >
              <div className="relative size-full">
                {thumbLoading[index] && (
                  <Skeleton className="absolute inset-0 size-full" />
                )}
                <Image
                  width={400}
                  height={400}
                  src={shot}
                  alt="tech image"
                  className={`size-full object-contain object-center transition-opacity duration-300 ${thumbLoading[index] ? 'opacity-0' : 'opacity-100'}`}
                  onLoadingComplete={() => {
                    setThumbLoading((prev) => {
                      const updated = [...prev];
                      updated[index] = false;
                      return updated;
                    });
                  }}
                />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowCase;
