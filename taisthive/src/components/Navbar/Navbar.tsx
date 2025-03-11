'use client';

import React, {
  type JSX,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { FaHouse, FaCircleInfo, FaPhone } from 'react-icons/fa6';
import { LuDot } from 'react-icons/lu';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { motion } from 'framer-motion';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    icon: FaHouse,
  },
  {
    id: 2,
    name: 'About',
    url: '/about',
    icon: FaCircleInfo,
  },
  {
    id: 3,
    name: 'Contact',
    url: '/contact',
    icon: FaPhone,
  },
];

export default function Navbar(): JSX.Element {
  const [active, setActive] = useState(false);
  const [dotVisible, setDotVisible] = useState(navLinks.map(() => false));

  // Cause the dot to appear when the mouse hovers over the link
  const handleMouseEnter = (idx: number) => {
    const dots = [...dotVisible];
    dots[idx] = true;
    setDotVisible(dots);
  };

  // Cause the dot to disappear when the mouse leaves the link
  const handleMouseLeave = (idx: number) => {
    const dots = [...dotVisible];
    dots[idx] = false;
    setDotVisible(dots);
  };

  return (
    <>
      <nav className="flex justify-around items-center p-2 shadow-sm fixed top-0 left-0 w-full bg-white z-50">
        {/* Logo */}
        <span
          className="text-4xl tracking-wider leading-loose flex-1 flex justify-center md:justify-start
        items-center ml-0 md:ml-8 lg:ml-16 cursor-pointer"
        >
          <span className="font-pacifico text-primary">taist</span>
          <span className="ml-1 font-bold font-lobster">hive</span>
        </span>

        {/* Nav Links */}
        <ul className="hidden md:flex justify-around items-center w-1/4 font-sans uppercase md:text-sm lg:text-md">
          {navLinks.map((link, idx) => (
            <li
              key={link.id}
              className="mr-3 hover:font-extrabold hover:translate-x-1
              hover:scale-x-105 flex items-center ease-in transition-all duration-100"
              onMouseEnter={(evt) => {
                handleMouseEnter(idx);
                evt.stopPropagation();
              }}
              onMouseLeave={(evt) => {
                handleMouseLeave(idx);
                evt.stopPropagation();
              }}
            >
              {dotVisible[idx] && (
                <LuDot
                  className="text-primary-light text-2xl inline-flex align-middle
                font-bold -mr-1"
                />
              )}
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex-1 md:flex justify-end items-center pr-4 hidden">
          <button className="bg-primary-light text-white font-sans font-bold mr-3 p-3 shadow rounded-sm">
            Sign In
          </button>
          <button
            className="bg-transparent text-black border-primary-light border font-sans
        font-bold mr-3 p-3 shadow rounded-sm hover:bg-primary-light hover:text-white
        duration-700 ease-in-out"
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex justify-end items-center">
          <button className="text-2xl" onClick={() => setActive(true)}>
            <FaBars className="text-primary text-2xl font-bold shadow-sm" />
          </button>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[100px]" />

      {/* Sidebar */}
      {active && <SideBar setActive={setActive} />}
    </>
  );
}

function SideBar({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <motion.article
      initial={{ top: 0, right: '-100%' }}
      animate={{ right: 0 }}
      exit={{ right: '-100%' }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 h-screen w-full bg-black bg-opacity-15 shadow-lg
      md:hidden ease-out duration-300 z-50"
    >
      <motion.div
        initial={{ top: 0, right: '-100%' }}
        animate={{ right: 0 }}
        className="h-full w-3/5 bg-white fixed top-0 right-0 shadow-lg flex flex-col"
      >
        <div className="flex justify-end items-center p-4">
          {/* Close Button */}
          <button className="text-2xl" onClick={() => setActive(false)}>
            <RxDoubleArrowRight className="text-primary text-3xl font-bold shadow-sm" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="uppercase h-fit flex-col items-start pl-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="my-6 font-sans font-bold text-lg flex w-full items-center"
            >
              <link.icon className="text-primary-light" />
              <Link href={link.url} className="flex-1 ml-2 tracking-widest">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex flex-col w-full px-2 h-fit">
          <button className="bg-primary-light text-white font-sans font-bold p-3 my-2 shadow rounded-sm w-full">
            Sign In
          </button>
          <button
            className="bg-transparent text-black border-primary-light border font-sans
          font-bold p-3 my-2 shadow rounded-sm hover:bg-primary-light hover:text-white
          duration-700 ease-in-out w-full"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
}
