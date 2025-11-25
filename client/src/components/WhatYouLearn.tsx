import { Card } from "@/components/ui/card";
import { TrendingUp, BookOpen, Shield, Brain } from "lucide-react";

const learningTopics = [
  {
    icon: TrendingUp,
    title: "Candlestick Pattern Recognition",
    description: "Learn to identify, interpret, and trade powerful patterns such as doji, hammer, engulfing, and harami. Understand trader psychology and timing for entries and exits.",
  },
  {
    icon: BookOpen,
    title: "Technical Analysis Fundamentals",
    description: "Analyze charts using proven indicators and tools. Master support/resistance, trend lines, and confluence strategies for high-probability setups.",
  },
  {
    icon: Shield,
    title: "Risk Management Strategies",
    description: "Protect your capital through smart money management, stop-loss placement, and risk-reward ratios. Learn position sizing for consistent results.",
  },
  {
    icon: Brain,
    title: "Trading Psychology & Discipline",
    description: "Build mental discipline, emotional control, and patience to make consistent trading decisions. Master the psychological edge.",
  },
];

export default function WhatYouLearn() {
  return (
    <section id="learn" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="text-learn-title">
            What You'll Learn
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-learn-subtitle">
            Comprehensive trading education covering patterns, analysis, risk management, and psychology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learningTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-200"
                data-testid={`card-learn-${index}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" data-testid={`text-learn-topic-${index}`}>
                  {topic.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-learn-description-${index}`}>
                  {topic.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
