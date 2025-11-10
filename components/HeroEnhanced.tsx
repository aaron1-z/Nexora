"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Zap, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Signal {
  id: number;
  title: string;
  value: string;
  trend: 'up' | 'down';
  color: string;
}

interface ActionBrief {
  id: number;
  title: string;
  status: 'active' | 'pending' | 'completed';
  priority: 'high' | 'medium' | 'low';
}

const signals: Signal[] = [
  { id: 1, title: 'Market Sentiment', value: '+24%', trend: 'up', color: 'from-green-400 to-emerald-500' },
  { id: 2, title: 'User Engagement', value: '+18%', trend: 'up', color: 'from-blue-400 to-cyan-500' },
  { id: 3, title: 'Revenue Growth', value: '+32%', trend: 'up', color: 'from-purple-400 to-pink-500' },
];

const actionBriefs: ActionBrief[] = [
  { id: 1, title: 'Optimize conversion funnel', status: 'active', priority: 'high' },
  { id: 2, title: 'Review customer feedback', status: 'pending', priority: 'medium' },
  { id: 3, title: 'Update pricing strategy', status: 'completed', priority: 'high' },
];

const momentumData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 92 },
  { month: 'Jun', value: 88 },
];

function DashboardPreview() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [activeBrief, setActiveBrief] = useState(0);

  useEffect(() => {
    const signalInterval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length);
    }, 2000);

    const briefInterval = setInterval(() => {
      setActiveBrief((prev) => (prev + 1) % actionBriefs.length);
    }, 2500);

    return () => {
      clearInterval(signalInterval);
      clearInterval(briefInterval);
    };
  }, []);

  const maxValue = Math.max(...momentumData.map(d => d.value));

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl" />
      
      <div className="relative p-6 space-y-6 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-black">Intelligence Dashboard</h3>
            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 font-semibold">
              Live
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {signals.map((signal, index) => (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: activeSignal === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "p-4 border transition-all duration-300 bg-white",
                  activeSignal === index 
                    ? "border-blue-600 shadow-lg shadow-blue-600/20 ring-2 ring-blue-600/10" 
                    : "border-gray-200 hover:border-gray-300"
                )}>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-500">{signal.title}</p>
                      <p className="text-2xl font-bold text-black">{signal.value}</p>
                    </div>
                    <div className={cn(
                      "p-2 rounded-lg bg-gradient-to-br",
                      signal.color
                    )}>
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    <motion.div
                      className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: activeSignal === index ? '100%' : '60%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-black">Action Briefs</h4>
          </div>
          <div className="space-y-2">
            <AnimatePresence mode="wait">
              {actionBriefs.map((brief, index) => (
                activeBrief === index && (
                  <motion.div
                    key={brief.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-3 border border-gray-200 bg-white backdrop-blur-sm hover:border-gray-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            brief.status === 'active' && "bg-green-500 animate-pulse shadow-sm",
                            brief.status === 'pending' && "bg-yellow-500 shadow-sm",
                            brief.status === 'completed' && "bg-blue-600 shadow-sm"
                          )} />
                          <span className="text-sm font-medium text-black">{brief.title}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-xs",
                            brief.priority === 'high' && "border-red-500/50 text-red-500",
                            brief.priority === 'medium' && "border-yellow-500/50 text-yellow-500",
                            brief.priority === 'low' && "border-blue-500/50 text-blue-500"
                          )}
                        >
                          {brief.priority}
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-black">Momentum Chart</h4>
          </div>
          <Card className="p-4 border border-gray-200 bg-white backdrop-blur-sm hover:border-gray-300 transition-colors">
            <div className="flex items-end justify-between h-32 gap-2">
              {momentumData.map((data, index) => (
                <motion.div
                  key={data.month}
                  className="flex flex-col items-center flex-1 gap-2"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md"
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.value / maxValue) * 100}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  <span className="text-xs font-medium text-gray-500">{data.month}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default function HeroEnhanced() {
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
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-gray-50 to-blue-400/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight tracking-tight max-w-3xl mx-auto lg:mx-0">
              Intelligence That Elevates Every Decision
            </h1>

            <p className="text-[17px] md:text-[18px] text-gray-500 leading-snug max-w-2xl mx-auto lg:mx-0 font-light tracking-wide">
              Nexora AI gives wealth managers the speed and clarity to act fast, turning signals into strategy and data into lasting client success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleGetStarted}
                disabled={!calendlyUrl}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-base font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Get started
              </button>
              <button
                onClick={handleSeeEngine}
                className="bg-black text-white px-6 py-2.5 rounded-full text-base font-semibold hover:bg-gray-900 transition-all duration-200"
              >
                See the engine
              </button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-sm" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-3xl blur-3xl" />
              <div className="relative w-full h-full rounded-2xl border border-gray-300 bg-white backdrop-blur-xl overflow-hidden shadow-2xl">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

