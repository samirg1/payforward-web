import Page from "@/pages/Page";

import CallToAction from "@/components/home/CallToAction";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";

const Index = () => {
    return (
        <Page mainClassName="flex-1">
            <HeroSection />
            <FeaturesSection />
            <CallToAction />
        </Page>
    );
};

export default Index;
