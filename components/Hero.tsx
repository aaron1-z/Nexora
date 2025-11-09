"use client";

import { FadeInUp } from "@/components/Motion";
import { Button } from "@/components/Ui";

export default function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleGetStarted = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  const handleSeeEngine = () => {
    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text">
                AI-Driven Intelligence.
                <br />
                <span className="gradient-text">Decision-Grade Clarity.</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <p className="text-xl text-muted leading-relaxed max-w-xl">
                Nexora transforms real-time signals into structured Action Briefs — executive summaries, forecasts, and recommended moves in minutes.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  disabled={!calendlyUrl}
                  variant="primary"
                  className="text-base px-8 py-4"
                >
                  Get started
                </Button>
                <Button
                  onClick={handleSeeEngine}
                  variant="secondary"
                  className="text-base px-8 py-4"
                >
                  See the engine
                </Button>
              </div>
            </FadeInUp>
          </div>

          {/* Right Side - Dashboard Preview */}
          <FadeInUp delay={0.3}>
            <div className="relative">
              <div className="glass-card p-8 space-y-6">
                {/* Flash Signals Card */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text">Flash Signals</h3>
                    <span className="text-xs text-muted">Live</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-elevated rounded w-full" />
                    <div className="h-3 bg-elevated rounded w-4/5" />
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-50 text-good text-xs rounded">Bullish</span>
                      <span className="px-2 py-1 bg-blue-50 text-accent text-xs rounded">Regulatory</span>
                    </div>
                  </div>
                </div>

                {/* Action Brief Card */}
                <div className="space-y-2 pt-4 border-t border-line">
                  <h3 className="text-sm font-semibold text-text">Action Brief</h3>
                  <div className="space-y-2">
                    <div className="h-3 bg-elevated rounded w-full" />
                    <div className="h-3 bg-elevated rounded w-3/4" />
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-2 bg-accent rounded-full flex-1" />
                      <span className="text-xs text-muted">High confidence</span>
                    </div>
                  </div>
                </div>

                {/* Momentum Card */}
                <div className="space-y-2 pt-4 border-t border-line">
                  <h3 className="text-sm font-semibold text-text">Momentum Δ</h3>
                  <div className="flex items-end gap-2 h-16">
                    <div className="flex-1 bg-gradient-to-t from-accent to-accent-2 rounded-t" style={{ height: "60%" }} />
                    <div className="flex-1 bg-gradient-to-t from-accent to-accent-2 rounded-t" style={{ height: "80%" }} />
                    <div className="flex-1 bg-gradient-to-t from-accent to-accent-2 rounded-t" style={{ height: "45%" }} />
                    <div className="flex-1 bg-gradient-to-t from-accent to-accent-2 rounded-t" style={{ height: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

