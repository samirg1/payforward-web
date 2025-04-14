import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Page from "@/pages/Page";

import CookiesContent from "@/components/legal/CookiesContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Legal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("terms");

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash === "privacy" || hash === "cookies" || hash === "terms") {
            setActiveTab(hash);
            // Scroll to top when changing tabs via URL hash
            window.scrollTo(0, 0);
        }
    }, [location]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        navigate(`#${value}`);
        // Scroll to top when changing tabs via UI interaction
        window.scrollTo(0, 0);
    };

    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">
                            Legal Information
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Important legal information about using our
                            services.
                        </p>
                    </div>

                    <Tabs
                        value={activeTab}
                        onValueChange={handleTabChange}
                        className="mb-12"
                    >
                        <TabsList className="w-full md:w-auto grid grid-cols-3 mb-8">
                            <TabsTrigger value="terms">
                                Terms of Service
                            </TabsTrigger>
                            <TabsTrigger value="privacy">
                                Privacy Policy
                            </TabsTrigger>
                            <TabsTrigger value="cookies">
                                Cookie Policy
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="terms">
                            <TermsContent />
                        </TabsContent>

                        <TabsContent value="privacy">
                            <PrivacyContent />
                        </TabsContent>

                        <TabsContent value="cookies">
                            <CookiesContent />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </Page>
    );
};

export default Legal;
