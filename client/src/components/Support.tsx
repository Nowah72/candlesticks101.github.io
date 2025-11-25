import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Support() {
  return (
    <section id="support" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-testid="text-support-title">
            Support & Community
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-support-subtitle">
            We're dedicated to your success. Get help and connect with fellow traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 mb-6">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4" data-testid="text-email-title">
              Email Support
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-email-description">
              Have questions or suggestions? Reach out to our support team directly.
            </p>
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => window.location.href = "mailto:david.alex.ilie@gmail.com"}
              data-testid="button-email"
            >
              <Mail className="h-4 w-4" />
              david.alex.ilie@gmail.com
            </Button>
          </Card>

          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 mb-6">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4" data-testid="text-discord-title">
              Discord Community
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-discord-description">
              Join our community to discuss trading strategies and learn from others.
            </p>
            <Button
              className="w-full gap-2"
              onClick={() => window.open("https://discord.gg/hUNyhdXQhz", "_blank")}
              data-testid="button-discord"
            >
              <SiDiscord className="h-5 w-5" />
              Join Discord Server
            </Button>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-6 bg-muted/50">
            <p className="text-sm text-muted-foreground text-center">
              <strong>⚠️ Disclaimer:</strong> CandleSticks101 is an educational tool. All content is for learning purposes only and does not constitute financial advice. Always perform your own research or consult financial professionals before making trading decisions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
