import { nigerian_meal, black_chef, tray3 } from '@/assets/images';
import { HeadBanner, FootBanner } from '@/components';
import { JSX } from 'react';
import Image from 'next/image';
import { SlideInLeft, SlideInRight } from '@/animations';

// This will appear in the browser's title bar
export async function generateMetadata() {
  return {
    title: 'Taisthive | Contact',
  };
}

export default function ContactPage(): JSX.Element {
  return (
    <article>
      {/* Banner */}
      <HeadBanner displayImage={nigerian_meal} message="Reach *Out *To *Us" />

      {/* Contact Information */}
      <section className="flex h-fit md:h-[55vh] my-6 md:my-8 lg:my-6 flex-col lg:flex-row">
        {/* Image
         */}
        <SlideInLeft className="w-full lg:w-1/2 mr-0 lg:mr-2 flex object-cover items-center rounded-2xl overflow-hidden relative">
          <Image
            src={black_chef}
            alt="A black chef preparing a delicious cuisine"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent via-[#ff6b6b4d]
          to-primary flex justify-start items-end text-left"
          >
            <span className="font-sans text-white text-xl md:text-3xl tracking-widest capitalize p-4 font-bold">
              contact information
            </span>
          </div>
        </SlideInLeft>

        {/* Contact Details
         */}
        <SlideInRight className="w-full lg:w-3/4 ml-0 lg:ml-4 h-full flex flex-col p-6">
          <p className="font-lora text-lg md:text-xl md:h-1/3 h-fit text-gray-500 text-justify my-3 md:my-0">
            Discover the essence of culinary artistry with Taisthive. Our
            passion for food transcends the ordinary, bringing you flavors that
            tell a story. Join us on a journey where every dish is a
            masterpiece, crafted with love and expertise. Let&quot;s create
            unforgettable memories together, one bite at a time.
          </p>
          <div
            className="font-lora text-lg md:text-xl md:h-1/3 h-fit flex flex-col bg-gray-100 p-4
          rounded-lg justify-around my-3 md:my-2"
          >
            <span className="text-gray-500">Phone</span>
            <span className="font-bold tracking-wider text-2xl md:text-3xl">
              +2347089699162
            </span>
          </div>
          <div
            className="font-lora text-lg md:text-xl md:h-1/3 h-fit flex flex-col bg-gray-100 p-4
          rounded-lg justify-around my-3 md:my-2"
          >
            <span className="text-gray-500">Email Address</span>
            <span className="font-bold tracking-wider text-2xl md:text-3xl">
              info@taisthive.com
            </span>
          </div>
        </SlideInRight>
      </section>

      {/* Contact Form */}
      <section className="w-full my-6 flex flex-col">
        <h2 className="font-lobster text-3xl md:text-6xl text-center text-black font-bold tracking-wider">
          Get{' '}
          <span className="font-pacifico text-primary tracking-widest font-bold">
            in
          </span>{' '}
          Touch
        </h2>
        <form className="w-full md:w-3/4 mx-auto flex flex-col p-6">
          <input
            type="text"
            placeholder="Full Name"
            className="font-sans text-lg p-4 my-3 rounded-lg bg-gray-100 font-bold tracking-wider outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="font-sans text-lg p-4 my-3 rounded-lg bg-gray-100 font-bold tracking-wider outline-none"
          />
          <textarea
            placeholder="Message"
            className="font-sans text-lg p-4 my-3 rounded-lg bg-gray-100 font-bold tracking-wider outline-none
            min-h-[20vh]"
          />
          <button
            type="submit"
            className="font-sans text-lg p-4 my-3 rounded-[40px] bg-primary text-white font-bold
          tracking-wider"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Foot Banner */}
      <FootBanner displayImage={tray3} />
    </article>
  );
}
