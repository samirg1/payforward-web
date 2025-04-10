import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import CallToAction from "@/components/home/CallToAction";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col">
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
