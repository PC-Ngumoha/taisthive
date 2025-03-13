import { HeadBanner, FootBanner } from '@/components';
import { nigerian_meal2, tray2, folake, cooking } from '@/assets/images';
import { type JSX } from 'react';
import { MdLiveTv } from 'react-icons/md';
import { LuChefHat } from 'react-icons/lu';
import { SlGlobe } from 'react-icons/sl';
import { RiKnifeLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsCircleHalf } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import {
  FaArrowRight,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export async function generateMetadata() {
  return {
    title: 'Taisthive | About',
  };
}

export default function AboutPage(): JSX.Element {
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
        {/* Vision statement */}
        <div
          className="p-4 row-span-2 md:row-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2
        flex flex-col justify-between relative"
        >
          <h3
            className="w-[80%] lg:w-[60%] p-2 text-2xl md:text-3xl lg:text-5xl font-sans font-bold tracking-wider
          mt-10 md:mt-0"
          >
            We believe food holds{' '}
            <em className="text-primary">transformative</em> power.
          </h3>
          <p className="w-full p-2 font-sans tracking-widest text-gray-500 text-sm lg:text-md">
            Taisthive is more than a recipe platform; it&quot;s a vibrant
            community celebrating culinary diversity. We connect home cooks and
            food enthusiasts from every corner of the globe. Share your passion,
            discover new techniques, and experience the richness of world
            cuisine.
          </p>

          <div
            className="absolute top-2 right-2 bg-black text-white w-fit p-3 flex items-center
          rounded-3xl shadow"
          >
            <span className="capitalize">our history</span>
            <LuChefHat className="text-xl ml-2 text-secondary" />
          </div>
        </div>

        {/* 2nd Card — Jump Links
          Animation(s):
          - TODO: Spring to bottom from top
        */}
        <div className="row-span-2 lg:row-span-3 flex flex-col justify-end">
          <div
            className="flex flex-col justify-between items-center gap-6 p-4 h-full w-full lg:h-[90%] rounded-3xl
          overflow-hidden bg-gray-50"
          >
            {[
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
            ].map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="bg-white w-full flex-1 p-1 flex items-center rounded-2xl shadow hover:bg-gray-50
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

        {/* 3rd Card
          Animation(s):
          - TODO: appear
        */}
        <div className="lg:row-span-3 flex flex-col justify-end">
          <div
            className="h-full lg:h-[75%] w-full rounded-3xl overflow-hidden bg-primary-dark text-white
          flex flex-col justify-end"
          >
            {/* Comment */}
            <span className="block w-full p-2 text-2xl lg:text-5xl font-lobster text-center tracking-wide font-bold">
              &quot;Taisthive makes cooking so easy.&quot;
            </span>
            {/* Commenter Avatar */}
            <div className="flex p-4 justify-center">
              <Image
                src={folake}
                alt="female nigerian user avatar"
                className="w-[50px] h-auto rounded-full mr-2"
              />
              <div className="w-3/5 capitalize">
                <h3 className="font-bold font-sans tracking-wider">
                  Folake Abiodun
                </h3>
                <span className="text-secondary-light">Master Chef 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4th Card — Cook showcase card */}
        <div
          className="row-start-7 row-span-2 md:row-start-2 md:col-start-2
        lg:row-span-3 lg:col-start-4 rounded-3xl overflow-hidden relative"
        >
          <Image
            src={cooking}
            alt="depicting a person cooking"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute left-0 top-0 w-full h-full bg-gray-600 bg-opacity-10 flex flex-col
          justify-between"
          >
            <div className="w-full flex justify-end p-2">
              <div className="bg-black h-fit rounded-full p-4 text-secondary text-xl shadow">
                <LuChefHat />
              </div>
            </div>

            <div className="bg-secondary-light text-black w-fit m-4 rounded-3xl p-3 flex items-center">
              <RiKnifeLine className="text-primary mr-2" />
              <span className="font-sans">Easy to follow recipes</span>
            </div>
          </div>
        </div>

        {/* 5th Card — Learn from the masters
          Animation(s):
          - TODO: appear
        */}
        <div
          className="row-start-1 row-span-2 md:row-span-1 lg:col-start-1
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

      {/* Core Values */}
      <section className="h-[90vh] md:h-[70vh] w-full rounded-3xl overflow-hidden my-12 relative">
        {/* Display Image */}
        <Image
          src="https://i.ibb.co/DmVDpn0/cooks.jpg"
          alt="Black chefs cooking a meal"
          height={100}
          width={100}
          className="w-full h-full object-cover"
          unoptimized
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-40 flex flex-col">
          <div className="md:flex-1 p-4 w-full">
            <h2
              className="text-white w-full md:w-[50%] lg:w-[30%] h-fit text-3xl md:text-5xl
              capitalize tracking-wider font-sans font-bold leading-relaxed"
            >
              What makes{' '}
              <span className="text-primary font-lobster tracking-widest">
                Us
              </span>{' '}
              Different ?
            </h2>
          </div>
          <div className="lg:flex-1 flex flex-col items-center lg:flex-row">
            <div
              className="h-fit w-full lg:h-full lg:w-2/5 flex justify-center
            md:justify-start md:items-center lg:items-end p-6 md:p-14 lg:pl-4 lg:py-4"
            >
              <button className="bg-black text-secondary h-fit w-fit p-4 rounded-3xl shadow capitalize flex items-center">
                Join our chef community
                <FaArrowRight
                  className="ml-2 hover:ml-6 duration-150 ease-in-out
              text-primary-light text-sm"
                />
              </button>
            </div>
            <div
              className="w-[90%] lg:w-3/5 p-2 md:pt-6 md:px-6 lg:pr-0 bg-white rounded-3xl md:rounded-t-3xl
              md:rounded-b-none lg:rounded-tl-3xl lg:rounded-tr-none lg:rounded-b-none"
            >
              {/* List of core values
                Animation(s):
                - TODO: spring up from bottom
              */}
              <div className="bg-gray-100 h-full w-full flex rounded-3xl flex-col md:flex-row">
                {[
                  {
                    id: 1,
                    title: 'User focused',
                    description:
                      'Taisthive is user-focused: your culinary journey is our top priority.',
                    icon: RxPerson,
                  },
                  {
                    id: 2,
                    title: 'Diverse community',
                    description:
                      'Our diverse community celebrates global flavors.',
                    icon: BsCircleHalf,
                  },
                  {
                    id: 3,
                    title: 'Fun recipes',
                    description:
                      "Unleash your culinary creativity with Taisthive's collection of fun and imaginative recipes.",
                    icon: IoHeartOutline,
                  },
                ].map((value) => (
                  <div key={value.id} className="flex-1 p-3 lg:py-6 lg:px-5">
                    <div
                      className="bg-white rounded-full p-2 w-fit h-fit flex items-center justify-center
                    mb-6 text-xl"
                    >
                      <value.icon />
                    </div>
                    <div>
                      <h3 className="text-gray-700 font-bold font-sans tracking-wide mb-3 capitalize">
                        {value.title}
                      </h3>
                      <span className="text-gray-500 tracking-wider">
                        {value.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team members */}
      <section className="h-fit lg:h-[90vh] w-full my-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Meet{' '}
          <span className="text-primary font-pacifico tracking-wider">Our</span>{' '}
          Team
        </h2>
        {/* List of team members
          Animation(s):
          - TODO: slide up from bottom
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: 'Chukwuemeka Ngumoha',
              role: 'Developer',
              image: '/assets/images/Chukwuemeka.webp',
              social: {
                twitter: 'https://x.com/PNgumoha',
                linkedin:
                  'https://www.linkedin.com/in/chukwuemeka-ngumoha-95a633194/',
                instagram: 'https://www.instagram.com/ngumohaprince/',
                github: 'https://github.com/PC-Ngumoha',
              },
            },
            {
              id: 2,
              name: 'Chika Aluka',
              role: 'Sous Chef',
              image: '/assets/images/chika.webp',
              social: {
                twitter: 'https://twitter.com/janesmith',
                linkedin: 'https://linkedin.com/in/janesmith',
                instagram: 'https://instagram.com/janesmith',
                facebook: '#',
              },
            },
            {
              id: 3,
              name: 'Hassan Gimba',
              role: 'Pastry Chef',
              image: '/assets/images/hassan.webp',
              social: {
                twitter: 'https://twitter.com/mikejohnson',
                linkedin: 'https://linkedin.com/in/mikejohnson',
                instagram: 'https://instagram.com/mikejohnson',
                facebook: '#',
              },
            },
          ].map((member) => (
            <div
              key={member.id}
              className="relative group h-[70vh] w-auto md:h-[60vh] lg:h-full lg:w-full my-9 lg:my-0
              rounded-3xl overflow-hidden border"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-[80%] object-cover"
                width={100}
                height={100}
                unoptimized
              />
              <div
                className="absolute inset-0 flex items-end
                bg-[linear-gradient(to_bottom,transparent_80%,#FFA39E_20%)]
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4"
              >
                <div className="flex space-x-4 w-full justify-between">
                  <Link
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener"
                  >
                    <FaXTwitter className="text-white text-4xl" />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener"
                  >
                    <FaLinkedinIn className="text-white text-4xl" />
                  </Link>
                  {'facebook' in member.social && (
                    <Link
                      href={member.social.facebook as string}
                      target="_blank"
                      rel="noopener"
                    >
                      <FaFacebookF className="text-white text-4xl" />
                    </Link>
                  )}
                  <Link
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener"
                  >
                    <FaInstagram className="text-white text-4xl" />
                  </Link>
                  {'github' in member.social && (
                    <Link
                      href={member.social.github as string}
                      target="_blank"
                      rel="noopener"
                    >
                      <FaGithub className="text-white text-4xl" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="text-center mt-4 h-[20%] w-auto">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Foot Banner */}
      <FootBanner displayImage={tray2} message="We're here to serve you" />
    </article>
  );
}
