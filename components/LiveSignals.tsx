"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/Motion";
import { Badge } from "@/components/Ui";

const signals = [
  {
    title: "AI chip exports see regulatory clarity in key markets",
    sentiment: "Bullish",
    catalyst: "Regulatory",
  },
  {
    title: "Supply chain improvements reduce lead times by 15%",
    sentiment: "Bullish",
    catalyst: "SupplyChain",
  },
  {
    title: "Major cloud provider increases AI infrastructure spending",
    sentiment: "Bullish",
    catalyst: "Tech",
  },
  {
    title: "New product launch from leading manufacturer scheduled",
    sentiment: "Neutral",
    catalyst: "Tech",
  },
  {
    title: "Enterprise adoption accelerates in financial services",
    sentiment: "Bullish",
    catalyst: "M&A",
  },
];

export default function LiveSignals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % signals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getSentimentColor = (sentiment: string): "good" | "bad" | "default" => {
    switch (sentiment) {
      case "Bullish":
        return "good";
      case "Bearish":
        return "bad";
      default:
        return "default";
    }
  };

  return (
    <section id="signals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">Live Signals</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              This is how Nexora tracks your focus area in real-time.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-text flex-1">
                      {signals[currentIndex].title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={getSentimentColor(signals[currentIndex].sentiment)}>
                      {signals[currentIndex].sentiment}
                    </Badge>
                    <Badge variant="accent">
                      {signals[currentIndex].catalyst}
                    </Badge>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
              {signals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-line hover:bg-muted"
                  }`}
                  aria-label={`Go to signal ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

