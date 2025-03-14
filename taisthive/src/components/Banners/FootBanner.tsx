import { JSX } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { SlideInLeft } from '@/animations';

export default function FootBanner({
  message = "Let's create memories together",
  displayImage,
}: {
  message?: string;
  displayImage: string | StaticImageData;
}): JSX.Element {
  return (
    <section className="w-full h-[60vh] relative my-8 rounded-3xl overflow-hidden p-4">
      <div
        className="w-full h-full flex flex-col lg:flex-row absolute top-0 left-0 bg-gradient-to-t
            from-transparent to-[#FF6B6B] items-start"
      >
        <h1
          className="font-display w-4/5 text-4xl md:text-7xl leading-relaxed tracking-wider text-white
              font-bold p-4 capitalize"
        >
          {message}
        </h1>

        <div className="w-[80%] md:w-[50%] lg:w-1/5 h-fit flex flex-col items-center justify-center">
          {/* button
           */}
          <SlideInLeft className="bg-white w-[90%] h-[150px] my-4 rounded-2xl flex justify-center items-center">
            <button
              className="bg-primary p-4 font-bold text-white font-sans tracking-wider rounded-xl
                shadow-lg w-[50%]"
            >
              Join Us !
            </button>
          </SlideInLeft>
        </div>
      </div>
      <Image
        src={displayImage}
        alt="An image depicting a basic nigerian meal"
        className="w-full h-full object-cover absolute -z-10 bg-opacity-40 top-0 left-0"
      />
    </section>
  );
}
