import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fariz Rizky Rizaldy — Front end Developer",
  description:
    "Front end Developer with 5+ years of experience building scalable web applications across React, Next.js, Angular, and more. Available for full-time roles and freelance projects.",
  openGraph: {
    title: "Fariz Rizky Rizaldy — Front end Developer",
    description:
      "Front end Developer with 5+ years of experience building scalable web applications across React, Next.js, Angular, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
