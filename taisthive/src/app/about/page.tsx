import { HeadBanner, FootBanner } from '@/components';
import { nigerian_meal2, tray2 } from '@/assets/images';
import { type JSX } from 'react';
import { MdLiveTv } from 'react-icons/md';
import { LuChefHat } from 'react-icons/lu';
import { SlGlobe } from 'react-icons/sl';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: 'Taisthive | About',
  };
}

export default function AboutPage(): JSX.Element {
  const jumpLinks = [
    {
      id: 1,
      title: 'live now',
      body: 'chef adaugo nwora',
      url: 'https://www.youtube.com/@chukwuemekangumoha8771',
      icon: MdLiveTv,
    },
    {
      id: 2,
      title: 'contribute now',
      body: 'share your recipe !',
      url: '#',
      icon: LuChefHat,
    },
    {
      id: 3,
      title: 'join community',
      body: 'connect with us',
      url: '/contact',
      icon: SlGlobe,
    },
  ];

  return (
    <article>
      {/* Head Banner */}
      <HeadBanner
        displayImage={nigerian_meal2}
        message="Discover *Our *Story"
      />

      {/* What we offer */}
      <section
        className="h-[180vh] md:h-[70vh] lg:h-[90vh] grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4
        lg:grid-rows-5 gap-4 grid-cols-1 grid-rows-9"
      >
        <div className="bg-gray-100 p-4 row-span-2 md:row-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2">
          1
        </div>

        {/* 2nd Card — Jump Links */}
        <div className="row-span-2 lg:row-span-3 flex flex-col justify-end">
          <div
            className="flex flex-col justify-between items-center gap-6 p-4 h-full w-full lg:h-[90%] rounded-3xl
          overflow-hidden bg-gray-100"
          >
            {jumpLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="bg-white w-full flex-1 p-1 flex items-center rounded-2xl shadow hover:bg-gray-100
                hover:shadow-none duration-700 ease-in-out"
              >
                <link.icon className="text-primary inline-block w-1/4 font-bold text-xl" />
                <div className="capitalize">
                  <h3 className="font-bold text-black tracking-wide font-sans">
                    {link.title}
                  </h3>
                  <span className="text-gray-500 text-sm">{link.body}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4 lg:row-span-3">3</div>

        {/* 4th Card */}
        <div
          className="bg-gray-100 p-4 row-start-7 row-span-2 md:row-start-2 md:col-start-2
        lg:row-span-3 lg:col-start-4"
        >
          4
        </div>

        {/* 5th Card — Learn from the masters */}
        <div
          className="bg-gray-100 row-start-1 row-span-2 md:row-span-1 lg:col-start-1
        lg:row-start-1 lg:row-span-full rounded-3xl overflow-hidden relative"
        >
          {/* Display Video */}
          <video
            width={100}
            height={100}
            autoPlay
            muted
            loop
            poster="/assets/images/chef_slicing_thumbnail.webp"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/chef_slicing.mp4" type="video/mp4" />
            {/* Alternative Image displayed for older browsers */}
            <Image
              src="/assets/images/chef_slicing_thumbnail.webp"
              alt="Chef Image"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </video>

          {/* Video Overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#FF6B6B]
          flex flex-col justify-end items-center"
          >
            <Link
              href="https://www.youtube.com/@chukwuemekangumoha8771"
              target="_blank"
              rel="noopener"
              className="bg-white absolute text-gray-500 top-2 right-2 shadow rounded-3xl h-fit w-[150px] p-2
              flex justify-center items-center hover:bg-black hover:text-secondary-dark duration-200 ease-in-out capitalize"
            >
              <MdLiveTv className="inline mr-2 text-primary text-lg" /> watch
              now
            </Link>

            <span
              className="align-baseline text-white text-2xl md:text-4xl text-left font-bold p-6 w-full capitalize
            font-sans tracking-wider"
            >
              learn from the masters
            </span>
          </div>
        </div>
      </section>

      {/* Foot Banner */}
      <FootBanner displayImage={tray2} message="We're here to serve you" />
    </article>
  );
}
