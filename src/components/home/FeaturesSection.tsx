import { useState } from "react";

import FadeIn from "@/components/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { businessFeatures, customerFeatures } from "@/data/features";

const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState<"business" | "customer">(
        "business",
    );
    const handleTabChange = (value: typeof activeTab) => {
        setActiveTab(value);
    };

    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-4">
                <FadeIn duration={100} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why PayForward?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover the powerful features that make our app stand
                        out from the crowd.
                    </p>
                </FadeIn>

                <Tabs
                    value={activeTab}
                    onValueChange={handleTabChange}
                    className="mb-12"
                >
                    <FadeIn duration={120}>
                        <TabsList className="w-3/5 grid grid-cols-2 mb-8 text-center mx-auto">
                            <TabsTrigger value="business">Business</TabsTrigger>
                            <TabsTrigger value="customer">Customer</TabsTrigger>
                        </TabsList>
                    </FadeIn>

                    <FadeIn duration={100}>
                        {[businessFeatures, customerFeatures].map(
                            (features, index) => (
                                <TabsContent
                                    key={index}
                                    value={
                                        index === 0 ? "business" : "customer"
                                    }
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {features.map((feature, index) => (
                                            <FadeIn
                                                key={index}
                                                duration={index * 50 + 200}
                                            >
                                                <Card
                                                    key={index}
                                                    className="border border-border hover:shadow-md transition-all"
                                                >
                                                    <CardHeader className="pb-2">
                                                        <div className="feature-icon mb-4">
                                                            {feature.icon}
                                                        </div>
                                                        <CardTitle>
                                                            {feature.title}
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-muted-foreground">
                                                            {
                                                                feature.description
                                                            }
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            </FadeIn>
                                        ))}
                                    </div>
                                </TabsContent>
                            ),
                        )}
                    </FadeIn>
                </Tabs>
            </div>
        </section>
    );
};

export default FeaturesSection;
