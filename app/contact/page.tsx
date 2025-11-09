"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Zap, TrendingUp, Shield, Brain, BarChart3, Target, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function ContactPage() {
  const [calendlyUrl] = useState("https://calendly.com/nexora"); // Replace with your actual Calendly URL
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script and CSS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);

    // Load Calendly CSS for better styling
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced LLM reasoning transforms raw data into strategic insights with scenario analysis and risk assessment.",
      stat: "95% accuracy",
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "Continuous intelligence feeds with instant alerts on critical developments in your focus areas.",
      stat: "24/7 coverage",
    },
    {
      icon: TrendingUp,
      title: "Strategic Forecasting",
      description: "Bull/Base/Bear scenario modeling with probability assessments and 30-day sentiment forecasts.",
      stat: "80% faster",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Automated risk detection and alerting system that monitors keywords, sentiment shifts, and market events.",
      stat: "Real-time alerts",
    },
  ];

  const useCases = [
    {
      icon: Target,
      title: "Market Analysts",
      description: "Reduce research time by 80% with comprehensive AI-generated briefs. Get instant insights on any topic with automatically generated scenarios.",
      metrics: ["80% faster research", "95% accuracy", "24/7 monitoring"],
    },
    {
      icon: BarChart3,
      title: "Strategy Teams",
      description: "Make data-driven decisions with real-time intelligence. Understand market dynamics and competitive landscapes instantly.",
      metrics: ["Real-time insights", "Scenario planning", "Trend analysis"],
    },
    {
      icon: Shield,
      title: "Investors & Risk Officers",
      description: "Monitor risks and opportunities continuously. Get alerted to critical developments before they impact your portfolio.",
      metrics: ["24/7 monitoring", "Risk alerts", "Portfolio tracking"],
    },
  ];

  const benefits = [
    "No API keys required — completely free to use",
    "5-minute data refresh for real-time insights",
    "Multi-format exports (Markdown, HTML, Playbook)",
    "Custom alert rules with IF/THEN triggers",
    "Network visualization and topic clustering",
    "Automated scenario generation with confidence scores",
  ];

  const metrics = [
    { value: "80%", label: "Faster Research", description: "Reduce time spent on data gathering" },
    { value: "95%", label: "Accuracy Rate", description: "AI-powered analysis precision" },
    { value: "24/7", label: "Monitoring", description: "Continuous intelligence feeds" },
    { value: "5min", label: "Data Refresh", description: "Real-time updates" },
  ];

  return (
    <div className="relative pt-20">
      {/* Hero Section with Calendly CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,231,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>YC-Ready Intelligence Platform</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-text">Transform Intelligence</span>
                <span className="block gradient-text">Into Action</span>
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Schedule a demo to see how Nexora Intelligence Engine transforms global information 
                into real-time, actionable intelligence briefs. Experience AI-powered strategic reasoning 
                that helps you make better decisions faster.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-text-muted">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={openCalendlyPopup}
                className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-background rounded-lg font-semibold text-lg hover:scale-105 transition-transform glow-accent flex items-center space-x-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-text-muted">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">30 min demo</span>
                </div>
                <div className="flex items-center space-x-2 text-text-muted">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm">No commitment</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Calendly Widget or Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-accent/20 glow overflow-hidden">
                {/* Calendly Inline Widget */}
                {isCalendlyLoaded ? (
                  <div
                    className="calendly-inline-widget"
                    data-url={calendlyUrl}
                    style={{ minWidth: "320px", height: "630px", background: "transparent" }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[630px] space-y-4">
                    <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                    <p className="text-text-muted">Loading calendar...</p>
                  </div>
                )}
                
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 relative bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-accent/20"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-text mb-1">{metric.label}</div>
                <div className="text-sm text-text-muted">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Nexora"
            subtitle="Powerful intelligence capabilities designed for decision-makers"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-secondary rounded-lg flex items-center justify-center glow group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                    <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/20">
                      {feature.stat}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-text">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative bg-gradient-to-b from-background/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Built for Your Team"
            subtitle="Whether you're analyzing markets, planning strategy, or managing risk"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 rounded-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-accent/20 hover:border-accent/40 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-secondary rounded-lg flex items-center justify-center mb-6 glow">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-text">{useCase.title}</h3>
                  <p className="text-text-muted mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-text-muted">{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Everything You Need</h2>
            <p className="text-xl text-text-muted">
              Comprehensive intelligence platform with advanced features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-background/60 to-background/30 border border-accent/10 hover:border-accent/30 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-muted">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative bg-gradient-to-b from-background/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Transform Your Intelligence?
            </h2>
            <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
              Join forward-thinking teams using Nexora to make better decisions faster. 
              Schedule a demo to see how intelligence automation can transform your workflow.
            </p>
            <motion.button
              onClick={openCalendlyPopup}
              className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-background rounded-lg font-semibold text-lg hover:scale-105 transition-transform glow-accent flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Your Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="mt-6 text-text-muted text-sm">
              Or email us at <a href="mailto:hello@nexora.ai" className="text-accent hover:text-accent-secondary transition-colors">hello@nexora.ai</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
