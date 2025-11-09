"use client";

import { FadeInUp } from "@/components/Motion";
import { Button } from "@/components/Ui";

export default function CTA() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleGetStarted = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            See your intelligence brief in minutes.
          </h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Book a 30-minute session with the team. We'll run Nexora on your focus area and walk you through the brief.
          </p>
          <Button
            onClick={handleGetStarted}
            disabled={!calendlyUrl}
            variant="primary"
            className="text-base px-8 py-4 mb-4"
          >
            Get started
          </Button>
          {!calendlyUrl && (
            <p className="text-xs text-muted">
              Set NEXT_PUBLIC_CALENDLY_URL
            </p>
          )}
          <p className="text-sm text-muted mt-4">
            We don't add you to a list. It's a live session.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

