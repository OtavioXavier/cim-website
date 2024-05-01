import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './ui/header/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "site do CIM",
  description: "Site de introdução ao CIM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
