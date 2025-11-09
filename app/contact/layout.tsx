import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started with Nexora | Schedule a Demo",
  description: "Schedule a demo to see how Nexora Intelligence Engine transforms global information into real-time, actionable intelligence briefs. Experience AI-powered strategic reasoning.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

