import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import WhatYouLearn from "@/components/WhatYouLearn";
import WhyChoose from "@/components/WhyChoose";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <WhatYouLearn />
        <WhyChoose />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
