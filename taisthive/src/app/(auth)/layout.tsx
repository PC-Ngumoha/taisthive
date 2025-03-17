import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="antialiased font-sans px-3 md:px-0 md:w-[90%] mx-auto">
      {children}
    </main>
  );
}
