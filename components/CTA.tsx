"use client";

import { FadeInUp } from "@/components/Motion";

export default function CTA() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleGetStarted = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <section id="cta" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            See your intelligence brief in minutes.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a 30-minute session with the team. We'll run Nexora on your focus area and walk you through the brief.
          </p>
          <button
            onClick={handleGetStarted}
            disabled={!calendlyUrl}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-base font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            Get started
          </button>
          {!calendlyUrl && (
            <p className="text-xs text-gray-500">
              Contact us to get started
            </p>
          )}
          <p className="text-sm text-gray-600 mt-4">
            We don't add you to a list. It's a live session.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

