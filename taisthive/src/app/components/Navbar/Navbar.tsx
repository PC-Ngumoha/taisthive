"use client";

import React, { type JSX, useState, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxDoubleArrowRight } from 'react-icons/rx';
import { motion } from "framer-motion";

const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/"
  },
  {
    id: 2,
    name: "About",
    url: "/"
  },
  {
    id: 3,
    name: "Contact",
    url: "/"
  },
];

export default function Navbar(): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="flex justify-around items-center p-2 shadow-sm">
      {/* Logo */}
      <span className="text-4xl tracking-wider leading-loose flex-1 flex justify-center items-center">
        <span className="font-pacifico text-primary">taist</span>
        <span className="ml-1 font-bold font-lobster">hive</span>
      </span>

      {/* Nav Links */}
      <ul className="hidden md:flex justify-around items-center flex-1 font-sans uppercase md:text-sm lg:text-md">
        {
          navLinks.map((link) => (
            <li key={link.id} className="mr-3">
              <Link href={link.url}>
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>

      {/* Auth Buttons */}
      <div className="flex-1 md:flex justify-end items-center pr-4 hidden">
        <button className="bg-primary-light text-white font-sans font-bold mr-3 p-3 shadow rounded-sm">Sign In</button>
        <button className="bg-transparent text-black border-primary-light border font-sans
        font-bold mr-3 p-3 shadow rounded-sm hover:bg-primary-light hover:text-white
        duration-700 ease-in-out">Sign Up</button>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex justify-end items-center">
        <button className="text-2xl" onClick={() => setActive(true)}>
          <FaBars className="text-primary text-2xl font-bold shadow-sm"/>
        </button>
      </div>
    </nav>

    {/* Sidebar */}
    {active && <SideBar setActive={setActive}/>}
    </>
  )
}

function SideBar({setActive}: {setActive: Dispatch<SetStateAction<boolean>> }): JSX.Element {
  return <motion.article
    layout
    initial={{ top: 0, right: "-100%" }}
    animate={{ right: 0 }}
    className="fixed top-0 right-0 h-screen w-full bg-black bg-opacity-15 shadow-lg
    md:hidden ease-out duration-300">
    <div className="h-full w-3/5 bg-white fixed top-0 right-0 shadow-lg">
      <div className="flex justify-end items-center p-4">
        {/* Close Button */}
        <button className="text-2xl" onClick={() => setActive(false)}>
          <RxDoubleArrowRight className="text-primary text-3xl font-bold shadow-sm"/>
        </button>
      </div>
    </div>
  </motion.article>
};