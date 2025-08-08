import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";
import InformationContent from "@/components/docs/InformationContent";
import PricingContent from "@/components/docs/PricingContent";
import QuickStartContent from "@/components/docs/QuickStartContent";
import TutorialsContent from "@/components/docs/TutorialsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DocTabs = "information" | "tutorials" | "pricing" | "quick-start";

const tabs: { [key in DocTabs]: { title: string; Component: React.FC } } = {
    "quick-start": {
        title: "Quick Start",
        Component: QuickStartContent,
    },
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
    const { section } = useParams<{ section?: DocTabs }>();
    const navigate = useNavigate();

    const activeTab = useMemo(() => {
        if (!section) return "quick-start";
        return section as DocTabs;
    }, [section]);

    return (
        <Page navLinkFrom="Docs">
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
                        onValueChange={(value) =>
                            navigate(
                                value in tabs
                                    ? `/docs/${value}`
                                    : "/docs/quick-start",
                            )
                        }
                        className="mb-12"
                    >
                        <FadeIn duration={120}>
                            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-8">
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
