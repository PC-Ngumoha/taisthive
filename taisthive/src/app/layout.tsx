import type { Metadata } from 'next';
import {
  Open_Sans,
  Playfair_Display,
  Montserrat,
  Pacifico,
  Lobster_Two,
  Lora,
} from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const pacifico = Pacifico({
  variable: '--font-pacifico',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const lobsterTwo = Lobster_Two({
  variable: '--font-lobster-two',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Taisthive',
  description: 'Recipe App for the Modern Age',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${playfair.variable} ${montserrat.variable}
     ${pacifico.variable} ${lobsterTwo.variable} ${lora.variable}`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
