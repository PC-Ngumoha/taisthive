import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-[10rem] font-bold text-primary/20">404</h1>
      <span className="text-6xl cursor-pointer animate-pulse tracking-widest">
        <span className="font-pacifico text-primary">taist</span>
        <span className="ml-1 font-bold font-lobster">hive</span>
      </span>
      <p className="text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist.
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
