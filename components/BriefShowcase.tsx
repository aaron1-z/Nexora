"use client";

import { FadeInUp, StaggerContainer } from "@/components/Motion";
import { Card, Badge, Button } from "@/components/Ui";
import { briefs } from "@/lib/briefs";

export default function BriefShowcase() {
  const getConfidenceColor = (confidence: string): "good" | "warn" | "bad" | "default" => {
    switch (confidence) {
      case "High":
        return "good";
      case "Medium":
        return "warn";
      case "Low":
        return "bad";
      default:
        return "default";
    }
  };

  const handleRequestBrief = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="briefs" className="py-20 bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text mb-4">
              Action Briefs that drive moves
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Structured output from the Nexora Intelligence Engine.
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {briefs.map((brief, index) => (
            <FadeInUp key={brief.title} delay={index * 0.1}>
              <Card>
                <h3 className="text-xl font-semibold text-text mb-3">{brief.title}</h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">{brief.summary}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-semibold text-text">Forecast:</h4>
                  <ul className="space-y-1">
                    {brief.forecast.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted flex items-start">
                        <span className="mr-2">•</span>
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted">Confidence</span>
                      <Badge variant={getConfidenceColor(brief.confidence)}>
                        {brief.confidence}
                      </Badge>
                    </div>
                    <div className="h-2 bg-elevated rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          brief.confidence === "High"
                            ? "bg-good"
                            : brief.confidence === "Medium"
                            ? "bg-warn"
                            : "bg-bad"
                        }`}
                        style={{
                          width:
                            brief.confidence === "High"
                              ? "85%"
                              : brief.confidence === "Medium"
                              ? "60%"
                              : "35%",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {brief.catalysts.map((catalyst) => (
                    <Badge key={catalyst} variant="accent">
                      {catalyst}
                    </Badge>
                  ))}
                </div>

                <Button
                  onClick={handleRequestBrief}
                  variant="secondary"
                  className="w-full"
                >
                  Request full brief
                </Button>
              </Card>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

