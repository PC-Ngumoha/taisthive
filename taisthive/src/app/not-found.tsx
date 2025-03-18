import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <span className="text-6xl cursor-pointer animate-pulse tracking-widest">
        <span className="font-pacifico text-primary">taist</span>
        <span className="ml-1 font-bold font-lobster">hive</span>
      </span>
      <h1 className="text-[9rem] font-bold text-primary/20">404</h1>
      <p
        className="text-gray-600 text-center font-sans tracking-wider text-sm md:text-md
      w-[90%] md:w-[40%] mx-auto"
      >
        The page you&apos;re looking for doesn&apos;t exist. Please return to
        the home page or try searching for another page
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        replace
      >
        Back to Home
      </Link>
    </main>
  );
}
