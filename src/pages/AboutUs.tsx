import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import { Separator } from "@/components/ui/separator";
import aboutUs from "@/data/aboutUs";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 pt-24 pb-16 mt-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10">
                            <h1 className="text-4xl font-bold mb-4">
                                About Us
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Learn more about PayForward and our mission.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {aboutUs.map((section, index) => (
                                <>
                                    <div key={section.id}>
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
                                    </div>
                                    {index < aboutUs.length - 1 && (
                                        <Separator />
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
