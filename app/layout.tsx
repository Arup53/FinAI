import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinAI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} `}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
// dashboard
