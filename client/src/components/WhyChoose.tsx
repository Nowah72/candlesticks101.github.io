import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const benefits = [
  "Structured lessons that guide you from beginner to confident trader",
  "Real-world trading examples and visual pattern guides",
  "Interactive animations that make learning engaging and memorable",
  "Progress tracking with flashcards and quizzes for knowledge retention",
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="text-why-title">
              Why Choose Candlesticks101?
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-why-subtitle">
              Unlike generic trading apps, we deliver structured lessons with real-world examples
            </p>
          </div>

          <Card className="p-8 lg:p-12">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                  data-testid={`item-benefit-${index}`}
                >
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-lg flex-1" data-testid={`text-benefit-${index}`}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-md bg-muted/50 border">
              <p className="text-sm text-muted-foreground">
                <strong>Perfect for:</strong> Beginners learning trading patterns • Day traders and swing traders • Stock market investors • Forex & crypto enthusiasts • Technical analysis students
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
