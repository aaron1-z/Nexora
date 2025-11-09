"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
import { Card } from "@/components/Ui";
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
    <section id="how-it-works" className="py-20 bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">How it works</h2>
          </div>
        </FadeInUp>

        <StaggerContainer>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent-2 to-accent transform -translate-y-1/2" style={{ margin: "0 5%" }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeInUp key={step.number} delay={index * 0.2}>
                    <Card className="text-center relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-accent rounded-full flex items-center justify-center text-accent font-bold text-sm">
                        {step.number}
                      </div>
                      <div className="mt-4 mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-2 rounded-lg flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-text mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm">{step.description}</p>
                    </Card>
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

