"use client";

import { FadeInUp } from "@/components/Motion";
import { ArrowRight } from "lucide-react";

const workflowSteps = [
  "Define your topic",
  "Receive Flash Signals",
  "Get Action Brief",
  "Set Triggers & Export",
];

export default function Workflow() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const handleGetStarted = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank");
    } else {
      window.location.href = "mailto:contact@nexora.com";
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Workflow Steps */}
            <FadeInUp>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
                  Your workflow
                </h2>
                <div className="space-y-4">
                  {workflowSteps.map((step, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shadow-sm">
                          {index + 1}
                        </div>
                        <span className="text-lg text-gray-700 font-normal">
                          {step}
                        </span>
                      </div>
                      {/* Arrow between steps (except after the last one) */}
                      {index < workflowSteps.length - 1 && (
                        <div className="flex items-center ml-5 my-2">
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Right Side - CTA */}
            <FadeInUp delay={0.2}>
              <div className="flex flex-col items-center justify-center lg:items-start space-y-6">
                <div className="text-center lg:text-left">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Ready to transform your intelligence workflow? Book a session and see Nexora in action.
                  </p>
                  <button
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Get started
                  </button>
                </div>
                {!calendlyUrl && (
                  <p className="text-xs text-gray-500 text-center lg:text-left">
                    Contact: contact@nexora.com
                  </p>
                )}
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}

