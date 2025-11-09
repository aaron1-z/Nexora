"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
import { Zap, FileText, TrendingUp, ArrowRight } from "lucide-react";

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
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <FadeInUp key={product.number} delay={index * 0.1}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Large Number Watermark */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 select-none">
                    {product.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-blue-600" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative flex-grow space-y-3">
                    <h3 className="text-2xl font-semibold text-black tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* CTA Link */}
                  <button
                    onClick={() => handleView(product.anchor)}
                    className="relative mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    <span>View</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </FadeInUp>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

