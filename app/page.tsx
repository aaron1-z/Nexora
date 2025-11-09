import HeroEnhanced from "@/components/HeroEnhanced";
import ProductStrip from "@/components/ProductStrip";
import BriefShowcase from "@/components/BriefShowcase";
import LiveSignals from "@/components/LiveSignals";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Workflow from "@/components/Workflow";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <HeroEnhanced />
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
