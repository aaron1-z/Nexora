export interface Brief {
  title: string;
  summary: string;
  forecast: string[];
  confidence: "High" | "Medium" | "Low";
  catalysts: string[];
}

export const briefs: Brief[] = [
  {
    title: "AI Chips Market — 30-Day Outlook",
    summary: "The AI chips market shows strong momentum with supply chain improvements and increased demand from cloud providers. Key catalysts include regulatory clarity and new product launches from major manufacturers.",
    forecast: [
      "Supply chain normalization expected to reduce lead times by 15–20% over the next quarter",
      "Regulatory developments in key markets (US, EU) likely to provide clearer framework for AI chip exports",
      "Enterprise adoption accelerating, with projected 25% growth in AI infrastructure spending"
    ],
    confidence: "High",
    catalysts: ["Regulatory", "SupplyChain", "Tech"],
  },
  {
    title: "Energy Transition — Q1 2025 Signals",
    summary: "Renewable energy deployment is accelerating, driven by policy incentives and cost competitiveness. Battery storage and grid infrastructure remain critical bottlenecks that are seeing increased investment.",
    forecast: [
      "Solar and wind capacity additions expected to exceed 2024 levels by 18%",
      "Grid storage investments rising, with $12B committed in pipeline projects",
      "Policy shifts in key regions creating both opportunities and regulatory complexity"
    ],
    confidence: "Medium",
    catalysts: ["Regulatory", "SupplyChain", "M&A"],
  },
  {
    title: "Quantum Computing — Breakthrough Analysis",
    summary: "Recent advances in error correction and qubit stability are moving quantum computing closer to practical applications. Major tech companies are increasing R&D investments while startups secure significant funding rounds.",
    forecast: [
      "Error rates improving, with several systems demonstrating fault tolerance in controlled environments",
      "Commercial applications in finance and logistics expected to emerge in 18–24 months",
      "Investment in quantum software and algorithms accelerating, with $2.5B in new funding this quarter"
    ],
    confidence: "High",
    catalysts: ["Tech", "M&A", "Regulatory"],
  },
];

