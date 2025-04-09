
import React from "react";
import MainNav from "@/components/MainNav";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ComingSoonBanner />
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
