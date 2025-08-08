import { ChevronsDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

import { heroSlideshowImages } from "@/data/images";

import useShowDownloadStore from "@/state/useShowDownloadStore";

const SLIDE_DURATION = 5 * 1000;

const HeroSection = () => {
    const showDownload = useShowDownloadStore((state) => state.show);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlideshowImages.length);
        }, SLIDE_DURATION);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative min-h-screen flex items-center justify-center -mt-10 md:mt-0 pt-10 overflow-hidden">
            <div className="absolute inset-0 hero-gradient -z-10" />
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 z-10">
                <div className="flex-1 text-center md:text-left">
                    <FadeIn>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-0 md:mb-4 text-left">
                            Search. Pay. Connect.
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-xl text-left">
                            Empowering businesses. Connecting communities.
                        </p>
                    </FadeIn>
                    <FadeIn duration={100}>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center md:justify-start">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90"
                                onClick={showDownload}
                            >
                                Download Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white/10"
                                onClick={() => navigate("/docs/pricing")}
                            >
                                View Pricing
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white/10"
                                onClick={() => navigate("/docs/quick-start")}
                            >
                                Quick Start
                            </Button>
                        </div>
                    </FadeIn>
                </div>
                <div className="flex-1 max-w-md">
                    <FadeIn duration={200}>
                        <div className="overflow-hidden w-full max-w-[800px] mx-auto rounded-3xl">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {heroSlideshowImages.map((slide) => (
                                    <div
                                        key={slide.id}
                                        className="min-w-full flex justify-center items-center p-4"
                                    >
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="w-[300px] h-[200px] md:w-[700px] md:h-[400px] object-cover rounded-2xl"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Progress bar */}
                            <div className="h-1 bg-muted">
                                <div
                                    key={currentSlide}
                                    className="h-full w-full bg-primary animate-fill"
                                    style={
                                        {
                                            "--duration": `${SLIDE_DURATION}ms`,
                                        } as React.CSSProperties
                                    }
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="absolute bottom-6 -translate-x-1/2 md:left-1/2 flex justify-center animate-bounce transform">
                    <ChevronsDown size={48} className="text-white" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
