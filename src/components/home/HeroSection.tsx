import useShowDownloadStore from "@/state/useShowDownloadStore";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const HeroSection = () => {
    const showDownload = useShowDownloadStore((state) => state.show);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            src: "/favicon/web-app-manifest-512x512.png",
            alt: "Mobile App Screenshot 1",
        },
        // {
        //     id: 2,
        //     src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        //     alt: "Mobile App Screenshot 2",
        // },
        // {
        //     id: 3,
        //     src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        //     alt: "Mobile App Screenshot 3",
        // },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleLearnMoreClick = () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 mt-0 overflow-hidden">
            <div className="absolute inset-0 hero-gradient -z-10" />
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Search. Pay. Connect.
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                        Empowering businesses. Connecting communities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
                            onClick={handleLearnMoreClick}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="flex-1 max-w-md">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {slides.map((slide, index) => (
                                <CarouselItem
                                    key={slide.id}
                                    className={
                                        index === currentSlide
                                            ? "block"
                                            : "hidden"
                                    }
                                >
                                    <div className=" p-2 rounded-3xl align-middle flex items-center justify-center">
                                        <img
                                            src={slide.src}
                                            alt={slide.alt}
                                            className="w-52 h-52"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <a
                            href="#features"
                            className="text-white/80 hover:text-white"
                        >
                            <ArrowDown size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
