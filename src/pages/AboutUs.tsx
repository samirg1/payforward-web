import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";
import { Separator } from "@/components/ui/separator";

import aboutUs from "@/data/aboutUs";

const AboutUs = () => {
    return (
        <Page navLinkFrom="About">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <FadeIn duration={100} className="mb-10">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-lg text-muted-foreground">
                            Learn more about PayForward and our mission.
                        </p>
                    </FadeIn>

                    <div className="space-y-8">
                        {aboutUs.map((section, index) => (
                            <FadeIn
                                key={section.id}
                                duration={index * 100 + 100}
                            >
                                <h2 className="text-2xl font-bold mb-4">
                                    {section.title}
                                </h2>
                                {section.content.map((content, idx) => (
                                    <p
                                        key={`${section.id}-content-${idx}`}
                                        className="text-muted-foreground mb-4"
                                    >
                                        {content}
                                    </p>
                                ))}
                                {index < aboutUs.length - 1 && <Separator />}
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default AboutUs;
