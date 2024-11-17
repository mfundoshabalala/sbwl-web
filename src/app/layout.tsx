import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="shadow p-6 -mb-10">
          <h1 className="text-3xl font-bold text-center">SBWL</h1>
          <h2 className="text-lg font-light text-center">Visual dream board</h2>
        </header>
        {children}
        <footer className="text-center text-sm p-4 font-light"> &copy; All rights reserved. {new Date().getFullYear()} SBWL </footer>
      </body>
    </html>
  );
}
