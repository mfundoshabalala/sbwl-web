import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/ui/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SBWL",
  description: "Visual dream board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <footer className="text-center text-sm p-4 font-light"> &copy; All rights reserved. {new Date().getFullYear()} SBWL </footer>
      </body>
    </html>
  );
}
