"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
import { Card } from "@/components/Ui";
import {
  FileText,
  Zap,
  Brain,
  TrendingUp,
  Target,
  Download,
} from "lucide-react";

const capabilities = [
  {
    icon: FileText,
    title: "Executive Briefs",
    description: "Decision-grade context with forecasts & actions.",
  },
  {
    icon: Zap,
    title: "Flash Intelligence",
    description: "Keyword & catalyst tracking with smart alerts.",
  },
  {
    icon: Brain,
    title: "Reasoning Engine",
    description: "Pattern recall & scenario analysis.",
  },
  {
    icon: TrendingUp,
    title: "Momentum & Bursts",
    description: "Detect surges and co-occurrence anomalies.",
  },
  {
    icon: Target,
    title: "Triggers & KPIs",
    description: "IF/THEN monitoring with measurable thresholds.",
  },
  {
    icon: Download,
    title: "Exports",
    description: "One-click reports in MD/HTML/ZIP.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">
              What Nexora does for you
            </h2>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <FadeInUp key={capability.title} delay={index * 0.1}>
                <Card>
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-2 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-muted text-sm">{capability.description}</p>
                </Card>
              </FadeInUp>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

