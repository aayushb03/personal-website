import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const inter = Courier_Prime({weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aayush Bharadwaj",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar`}>{children}</body>
    </html>
  );
}
