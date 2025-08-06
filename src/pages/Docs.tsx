import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";
import InformationContent from "@/components/docs/InformationContent";
import PricingContent from "@/components/docs/PricingContent";
import TutorialsContent from "@/components/docs/TutorialsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DocTabs = "information" | "tutorials" | "pricing";

const tabs: { [key in DocTabs]: { title: string; Component: React.FC } } = {
    information: {
        title: "Information",
        Component: InformationContent,
    },
    tutorials: {
        title: "Tutorials",
        Component: TutorialsContent,
    },
    pricing: {
        title: "Pricing",
        Component: PricingContent,
    },
};

const Docs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<DocTabs>("information");

    useEffect(() => {
        const hash = location.hash.substring(1);

        const tab = hash.split("-")[0] as DocTabs;
        if (Object.keys(tabs).includes(tab)) setActiveTab(tab);
    }, [location]);

    const handleTabChange = (value: string) => {
        setActiveTab(value as DocTabs);
        navigate(`#${value}`);
    };

    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <FadeIn duration={100} className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">
                            Documentation
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Everything you need to know about using our app.
                        </p>
                    </FadeIn>

                    <Tabs
                        value={activeTab}
                        onValueChange={handleTabChange}
                        className="mb-12"
                    >
                        <FadeIn duration={120}>
                            <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 mb-8">
                                {Object.entries(tabs).map(
                                    ([tabId, { title }]) => (
                                        <TabsTrigger key={tabId} value={tabId}>
                                            {title}
                                        </TabsTrigger>
                                    ),
                                )}
                            </TabsList>
                        </FadeIn>
                        {Object.entries(tabs).map(([tabId, { Component }]) => (
                            <TabsContent key={tabId} value={tabId}>
                                <Component />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </Page>
    );
};

export default Docs;
