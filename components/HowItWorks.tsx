"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
import { Database, Brain, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Database,
    title: "Ingest & Tag",
    description: "Live news & data; sentiment & catalysts.",
  },
  {
    number: "2",
    icon: Brain,
    title: "Reason & Compare",
    description: "Scenario planning, pattern recall, momentum.",
  },
  {
    number: "3",
    icon: FileText,
    title: "Brief & Act",
    description: "Executive summary, actions, triggers, exports.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
              How it works
            </h2>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="relative">
            {/* Connecting line - positioned at number badge height */}
            <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent" style={{ top: "30px" }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeInUp key={step.number} delay={index * 0.2}>
                    <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                      {/* Number Badge */}
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                        <span className="text-white font-bold text-lg">
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className="mt-8 mb-6 flex justify-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-blue-600" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-semibold text-black tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

