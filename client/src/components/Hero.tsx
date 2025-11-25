import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiApple } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container relative mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Free Trading Education App
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight" data-testid="text-hero-title">
                Master Candlestick Patterns & Technical Analysis
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground" data-testid="text-hero-subtitle">
                Learn trading patterns, chart reading, and market psychology. Whether you trade stocks, forex, or crypto, build confidence with structured lessons and real-world examples.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" data-testid="button-google-play">
                <SiGoogleplay className="h-5 w-5" />
                Download on Google Play
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-app-store">
                <SiApple className="h-6 w-6" />
                Download on App Store
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-lessons">50+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-patterns">30+</div>
                <div className="text-sm text-muted-foreground">Patterns</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary" data-testid="text-stat-rating">4.8</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl border-8 border-foreground/10 bg-card overflow-hidden shadow-2xl" style={{ width: "300px", height: "600px" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-background">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl">📊</div>
                    <div className="text-sm font-medium text-muted-foreground">
                      Replace with your app screenshot
                      <br />
                      <code className="text-xs">@assets/hero-screenshot.png</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
