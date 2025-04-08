
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import DownloadDialog from "@/components/DownloadDialog";

const HeroSection = () => {
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);

  const handleDownloadClick = () => {
    setShowDownloadDialog(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Complete 
            <span className="text-primary-foreground"> Mobile Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Discover all the powerful features and resources for your mobile application in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={handleDownloadClick}
            >
              Download Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="bg-white p-2 rounded-3xl shadow-xl floating-animation">
            <img 
              src="/placeholder.svg" 
              alt="Mobile App Screenshot" 
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white/80 hover:text-white">
          <ArrowDown size={24} />
        </a>
      </div>

      {/* Download Dialog */}
      <DownloadDialog 
        open={showDownloadDialog} 
        onOpenChange={setShowDownloadDialog} 
      />
    </section>
  );
};

export default HeroSection;
