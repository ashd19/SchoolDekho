import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SchoolDekho - Find Your Perfect School in India",
  description: "Discover top schools across India with detailed information, reviews, virtual tours, and comprehensive search filters. Make informed decisions for your child&apos;s education.",
  keywords: "schools in India, CBSE schools, ICSE schools, international schools, boarding schools, school search, education, school reviews",
  authors: [{ name: "SchoolDekho Team" }],
  openGraph: {
    title: "SchoolDekho - Find Your Perfect School in India",
    description: "Discover top schools across India with detailed information, reviews, virtual tours, and comprehensive search filters.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SchoolDekho - Find Your Perfect School in India",
    description: "Discover top schools across India with detailed information, reviews, virtual tours, and comprehensive search filters.",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
