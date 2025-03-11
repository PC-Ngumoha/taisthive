'use client';

import Image, { type StaticImageData } from 'next/image';
import { type JSX, useState, useEffect } from 'react';

export default function HeadBanner({
  displayImage,
  message = 'Message from *Us',
}: {
  displayImage: string | StaticImageData;
  message?: string;
}): JSX.Element {
  const [messageChunks, setMessageChunks] = useState<string[]>([]);

  // Split the message into chunks for better styling
  useEffect(() => {
    const chunks = message.split('*');
    setMessageChunks(chunks);
  }, [message]);

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
        <h1
          className="font-display text-3xl md:text-6xl self-center w-[80%] md:w-[50%] lg:w-[40%]
        tracking-wider text-white bg-black bg-opacity-40 p-4 rounded-lg font-bold"
        >
          {messageChunks.map((chunk, idx) =>
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
        </h1>
      </div>
    </section>
  );
}
