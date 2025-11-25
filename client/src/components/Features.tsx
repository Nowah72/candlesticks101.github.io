import { Card } from "@/components/ui/card";
import { BookOpen, BarChart3, Target, Brain, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "50+ Comprehensive Lessons",
    description: "Detailed lessons on candlestick patterns and chart reading from beginner to advanced.",
  },
  {
    icon: BarChart3,
    title: "Interactive Charts",
    description: "Animated candlestick demonstrations with real trading examples and visual guides.",
  },
  {
    icon: Target,
    title: "Pattern Recognition",
    description: "Master bullish and bearish setups: Hammer, Engulfing, Morning Star, and more.",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description: "Build mental discipline, emotional control, and patience for consistent decisions.",
  },
  {
    icon: TrendingUp,
    title: "Technical Indicators",
    description: "Learn RSI, MACD, Moving Averages, Bollinger Bands, and Volume Analysis.",
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Track your learning path with achievements, flashcards, and knowledge testing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="text-features-title">
            Everything You Need to Master Trading
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-features-subtitle">
            Structured lessons and real-world examples that guide you from beginner to confident trader
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-200"
                data-testid={`card-feature-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
