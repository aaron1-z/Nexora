import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora Intelligence Engine | AI-Driven Intelligence",
  description: "Nexora transforms real-time signals into structured Action Briefs — executive summaries, forecasts, and recommended moves in minutes.",
  keywords: "AI intelligence, strategic intelligence, market intelligence, action briefs, real-time alerts, AI reasoning, business intelligence",
  authors: [{ name: "Nexora Intelligence" }],
  openGraph: {
    title: "Nexora Intelligence Engine | AI-Driven Intelligence",
    description: "Nexora transforms real-time signals into structured Action Briefs — executive summaries, forecasts, and recommended moves in minutes.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Intelligence Engine",
    description: "AI-Driven Intelligence. Decision-Grade Clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
