'use client';

import Image, { type StaticImageData } from 'next/image';
import { type JSX } from 'react';
// import { motion } from 'framer-motion';
import { SlideUp } from '@/animations';

export default function HeadBanner({
  displayImage,
  message = 'Message from *Us',
}: {
  displayImage: string | StaticImageData;
  message?: string;
}): JSX.Element {
  return (
    <section className="w-full h-[40vh] md:h-[30vh] lg:h-[40vh] relative my-6 rounded-3xl overflow-hidden flex">
      <Image
        src={displayImage}
        alt="An image depicting a basic nigerian meal"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div
        className="bg-gray-200 bg-opacity-10 absolute w-full h-full top-0 left-0 flex items-center
      md:justify-start justify-center p-4"
      >
        {/* Heading
          Animation(s):
          - DONE: slide in from bottom with delay
        */}
        <SlideUp
          delay={0.8}
          className="font-display text-3xl md:text-6xl self-center w-[80%] md:w-[50%] lg:w-[40%]
        tracking-wider text-white bg-black bg-opacity-40 p-4 rounded-lg font-bold"
        >
          {message
            .trim()
            .split('*') // Split at occurrence of *
            .map((chunk, idx) =>
              idx % 2 === 0 ? (
                <span key={idx}>{chunk}</span>
              ) : (
                <span
                  key={idx}
                  className="text-primary font-pacifico tracking-widest"
                >
                  {chunk}
                </span>
              )
            )}
        </SlideUp>
      </div>
    </section>
  );
}
