import useShowDownloadStore from "@/state/useShowDownloadStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Page from "@/pages/Page";

import CallToAction from "@/components/home/CallToAction";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";

const Index = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const showDownload = useShowDownloadStore((state) => state.show);

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash === "download") {
            showDownload();
            navigate("/");
        }
    }, [location, showDownload, navigate]);

    return (
        <Page mainClassName="flex-1">
            <HeroSection />
            <FeaturesSection />
            <CallToAction />
        </Page>
    );
};

export default Index;
