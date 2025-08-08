import { useMemo } from "react";
import { useParams } from "react-router-dom";

import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";
import CookiesContent from "@/components/legal/CookiesContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useNavigate from "@/hooks/useNavigate";

const Legal = () => {
    const navigate = useNavigate();
    const { section } = useParams<LEGAL_ROUTE_PARAMS>();
    const activeTab = useMemo(() => {
        if (!section || !["terms", "privacy", "cookies"].includes(section))
            return "terms";
        return section;
    }, [section]);

    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <FadeIn duration={100} className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">
                            Legal Information
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Important legal information about using our
                            services.
                        </p>
                    </FadeIn>

                    <Tabs
                        value={activeTab}
                        onValueChange={(value: keyof ROUTES["/legal"]) =>
                            navigate(`/legal/${value}`)
                        }
                        className="mb-12"
                    >
                        <FadeIn duration={120}>
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
                        </FadeIn>
                        <FadeIn key={activeTab} duration={200}>
                            <TabsContent value="terms">
                                <TermsContent />
                            </TabsContent>

                            <TabsContent value="privacy">
                                <PrivacyContent />
                            </TabsContent>

                            <TabsContent value="cookies">
                                <CookiesContent />
                            </TabsContent>
                        </FadeIn>
                    </Tabs>
                </div>
            </div>
        </Page>
    );
};

export default Legal;
