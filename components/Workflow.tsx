"use client";

import { FadeInUp } from "@/components/Motion";
import { Card, Button } from "@/components/Ui";
import { ArrowRight } from "lucide-react";

export default function Workflow() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleGetStarted = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-elevated border-2 border-line p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-text mb-4">Your workflow</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-muted">Define your topic</span>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-muted">Receive Flash Signals</span>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-muted">Get Action Brief</span>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-muted">Set Triggers & Export</span>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="flex flex-col items-center justify-center">
                <Button
                  onClick={handleGetStarted}
                  disabled={!calendlyUrl}
                  variant="primary"
                  className="text-base px-8 py-4"
                >
                  Get started
                </Button>
                {!calendlyUrl && (
                  <p className="text-xs text-muted mt-2 text-center">
                    Set NEXT_PUBLIC_CALENDLY_URL
                  </p>
                )}
              </div>
            </FadeInUp>
          </div>
        </Card>
      </div>
    </section>
  );
}

