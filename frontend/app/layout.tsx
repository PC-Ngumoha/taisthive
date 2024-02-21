import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/custom/navbar";
import { Toaster } from "@/components/ui/toaster";
import { inter } from "@/fonts";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * This particular piece of code helps prevent fontawesome from
 * loading it's own CSS again after the page has been rendered
 * on the server and displayed by Next.js thus preventing any
 * fontawesome icons from being rendered too big.
 */
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Taisthive",
  description: "Share Your Tastes",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
