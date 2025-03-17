import { Navbar, Footer } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="px-3 md:px-0 md:w-[90%] mx-auto">
        {children}
        <Footer />
      </main>
    </>
  );
}
