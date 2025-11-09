"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
              What Nexora does for you
            </h2>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <FadeInUp key={capability.title} delay={index * 0.1}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-black tracking-tight">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed font-light">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

