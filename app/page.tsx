import Hero from "@/components/Hero";
import ProductStrip from "@/components/ProductStrip";
import BriefShowcase from "@/components/BriefShowcase";
import LiveSignals from "@/components/LiveSignals";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Workflow from "@/components/Workflow";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ProductStrip />
      <BriefShowcase />
      <LiveSignals />
      <Capabilities />
      <HowItWorks />
      <Workflow />
      <CTA />
    </div>
  );
}
