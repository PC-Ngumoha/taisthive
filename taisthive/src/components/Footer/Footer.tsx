'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      id: 2,
      name: 'About',
      url: '/about',
    },
    {
      id: 3,
      name: 'Contact',
      url: '/contact',
    },
  ];

  // Help me keep track of whether we're on the active route or not
  const [activeRoutes, setActiveRoutes] = useState<boolean[]>(
    navLinks.map(() => false)
  );
  const pathname = usePathname();

  // Get's called once on component mount and after with each change in path
  useEffect(() => {
    // handle change in active route
    const handleRouteChange = (idx: number) => {
      const newActiveRoutes = [...navLinks.map(() => false)];
      newActiveRoutes[idx] = true;
      setActiveRoutes(newActiveRoutes);
    };

    // Locate the current active route
    navLinks.find(
      (link, idx) => link.url === pathname && handleRouteChange(idx)
    );
  }, [pathname]);

  return (
    <footer
      className="w-full min-h-[30vh] bg-gray-800 text-white flex flex-col md:flex-row p-4
    rounded-xl"
    >
      {/* Company Logo, Slogan & Copyright text*/}
      <section className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <span className="text-6xl cursor-pointer">
            <span className="font-pacifico text-primary">taist</span>
            <span className="ml-1 font-bold font-lobster">hive</span>
          </span>
          <p className="text-sm font-display italic font-bold tracking-wider mt-4">
            Share your kitchen, Share your story.
          </p>
        </div>
        <p className="text-xs md:mt-4 mt-8 font-light text-secondary-light">
          Copyright &copy; 2025 Taisthive. All rights reserved.
        </p>
      </section>
      {/* Contact Details & Input box */}
      <section className="flex-1">
        {/* Company links & Social Media */}
        <div className="flex w-full my-4 md:my-0 md:flex-row flex-col">
          {/* Company */}
          <div className="flex-1 my-8 md:my-0">
            <h3 className="text-lg font-bold font-pacifico">Company</h3>
            <ul className="text-sm">
              {navLinks.map((link, idx) => (
                <li
                  key={link.id}
                  className={`hover:underline mt-4 ${
                    activeRoutes[idx]
                      ? 'text-primary font-bold'
                      : 'text-secondary'
                  }`}
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div className="flex-1 my-8 md:my-0">
            <h3 className="text-lg font-bold font-pacifico">Social Media</h3>
            {/* List of social media links */}
            <ul className="text-sm">
              {[
                {
                  id: 1,
                  name: 'Linkedin',
                  url: 'https://www.linkedin.com/in/chukwuemeka-ngumoha-95a633194/',
                },
                {
                  id: 2,
                  name: 'Github',
                  url: 'https://github.com/PC-Ngumoha',
                },
                {
                  id: 3,
                  name: 'Twitter',
                  url: 'https://x.com/PNgumoha',
                },
                {
                  id: 4,
                  name: 'Instagram',
                  url: 'https://www.instagram.com/ngumohaprince/',
                },
                {
                  id: 5,
                  name: 'Facebook',
                  url: 'https://web.facebook.com/prince.ngumoha.3',
                },
              ].map((link) => (
                <li
                  key={link.id}
                  className="hover:underline mt-1 text-secondary"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Email input form */}
        <form className="w-full flex flex-col md:flex-row mt-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="h-[50px] w-full md:w-[80%] my-4 md:my-0 p-4 placeholder:font-display placeholder:capitalize
            placeholder:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-light
            focus:ring-opacity-50 shadow-sm rounded-lg font-bold"
          />
          <button
            className="bg-primary-light ml-2 w-[80%] md:w-[20%] shadow-sm rounded-lg text-gray-800 font-bold
          h-[50px] p-4 self-center flex justify-center items-center text-center"
          >
            Submit
          </button>
        </form>
      </section>
    </footer>
  );
}
