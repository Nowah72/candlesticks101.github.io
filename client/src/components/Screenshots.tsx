import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  { title: "Interactive Lessons", image: "/lesson_1764086592743.PNG" },
  { title: "Market Analysis", image: "/market_1764086592743.PNG" },
  { title: "Pattern Scanner", image: "/sacnner_1764086592744.PNG" },
  { title: "Trading Simulator", image: "/sim_1764086592744.PNG" },
  { title: "Drawing Tools", image: "/drawing_1764086858883.PNG" },
  { title: "Flashcards", image: "/flashcards_1764086858883.PNG" },
  { title: "Quiz Practice", image: "/quiz_1764086888488.PNG" },
];

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="text-screenshots-title">
            Beautiful, Intuitive Interface
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-screenshots-subtitle">
            Engaging visual charts and animations make learning candlestick analysis easy to remember
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="outline"
            onClick={goToPrevious}
            className="absolute left-0 z-10"
            data-testid="button-prev-screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory custom-scrollbar max-w-4xl">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`flex-shrink-0 snap-center transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-50"
                }`}
                data-testid={`screenshot-${index}`}
              >
                <div className="w-[280px]">
                  <Card className="overflow-hidden shadow-xl">
                    <div className="aspect-[9/19] bg-card">
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                  <p className="text-center mt-4 font-medium" data-testid={`text-screenshot-title-${index}`}>
                    {screenshot.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={goToNext}
            className="absolute right-0 z-10"
            data-testid="button-next-screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
              }`}
              data-testid={`dot-indicator-${index}`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
