"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
import { Card } from "@/components/Ui";
import { Zap, FileText, TrendingUp } from "lucide-react";

const products = [
  {
    number: "01",
    icon: Zap,
    title: "Flash Signals",
    description: "Live headlines → sentiment/tags → smart alerts",
    anchor: "#signals",
  },
  {
    number: "02",
    icon: FileText,
    title: "Action Briefs",
    description: "Executive summary, forecasts, actions, triggers",
    anchor: "#briefs",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Trends & Momentum",
    description: "Entity/catalyst momentum, bursts, volatility",
    anchor: "#product",
  },
];

export default function ProductStrip() {
  const handleView = (anchor: string) => {
    document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <FadeInUp key={product.number} delay={index * 0.1}>
                <Card className="relative">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-muted/10">
                    {product.number}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-2 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">{product.title}</h3>
                  <p className="text-muted text-sm mb-4">{product.description}</p>
                  <button
                    onClick={() => handleView(product.anchor)}
                    className="text-accent hover:text-accent-2 text-sm font-medium"
                  >
                    View →
                  </button>
                </Card>
              </FadeInUp>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

