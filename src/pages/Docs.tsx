import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Page from "@/pages/Page";

import GettingStartedContent from "@/components/docs/GettingStartedContent";
import InformationContent from "@/components/docs/InformationContent";
import PricingContent from "@/components/docs/PricingContent";
import TutorialsContent from "@/components/docs/TutorialsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Docs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("getting-started");
    const [activeTutorial, setActiveTutorial] = useState<string | null>(null);
    const [activeInfoSection, setActiveInfoSection] = useState<string | null>(
        null,
    );

    useEffect(() => {
        const hash = location.hash.substring(1);

        if (hash.startsWith("tutorial-")) {
            setActiveTab("tutorials");
            setActiveTutorial(hash.replace("tutorial-", ""));
        } else if (hash.startsWith("info-")) {
            setActiveTab("information");
            setActiveInfoSection(hash.replace("info-", ""));
        } else if (hash) {
            setActiveTab(hash);
        }
    }, [location]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        navigate(`#${value}`);
    };

    const handleTutorialSelect = (tutorialId: string) => {
        setActiveTutorial(tutorialId === activeTutorial ? null : tutorialId);
        if (tutorialId !== activeTutorial) {
            navigate(`#tutorial-${tutorialId}`);
        }
    };

    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">
                            Documentation
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Everything you need to know about using our mobile
                            application.
                        </p>
                    </div>

                    <Tabs
                        value={activeTab}
                        onValueChange={handleTabChange}
                        className="mb-12"
                    >
                        <TabsList className="w-full md:w-auto grid grid-cols-4 mb-8">
                            <TabsTrigger value="getting-started">
                                Getting Started
                            </TabsTrigger>
                            <TabsTrigger value="information">
                                Information
                            </TabsTrigger>
                            <TabsTrigger value="tutorials">
                                Tutorials
                            </TabsTrigger>
                            <TabsTrigger value="pricing">Pricing</TabsTrigger>
                        </TabsList>

                        <TabsContent value="getting-started">
                            <GettingStartedContent />
                        </TabsContent>

                        <TabsContent value="information">
                            <InformationContent />
                        </TabsContent>

                        <TabsContent value="tutorials">
                            <TutorialsContent
                                activeTutorial={activeTutorial}
                                onTutorialSelect={handleTutorialSelect}
                            />
                        </TabsContent>

                        <TabsContent value="pricing">
                            <PricingContent />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </Page>
    );
};

export default Docs;
