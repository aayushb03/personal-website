import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Courier_Prime({weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aayush Bharadwaj",
  description: "Aayush Bharadwaj's personal website/portfolio - Student at University of Wisconsin-Madison studying Computer Science, Data Science, and Economics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics/>
      <GoogleAnalytics gaId="G-EYYPPGJZN8" />
      <body className={`${inter.className} no-scrollbar cursor-none`}>{children}</body>
    </html>
  );
}
