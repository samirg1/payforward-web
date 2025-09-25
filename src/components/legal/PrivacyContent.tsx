import { Separator } from "@/components/ui/separator";

import privacyContent from "@/data/privacyContent";

const PrivacyContent = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p className="text-muted-foreground mb-4">
                    Last updated: September 25, 2025
                </p>
                <p className="text-muted-foreground mb-4">
                    This Privacy Policy describes how PayForward collects, uses,
                    and shares your personal information when you use our
                    services.
                </p>
            </div>

            <Separator />

            {privacyContent.map((section, index) => (
                <div key={`privacy-content-section-${index}`}>
                    <h3 className="text-xl font-bold mb-3">
                        {index + 1}. {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        {section.subtitle}
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground mb-4">
                        {section.listContent.map((content, itemIndex) => (
                            <li
                                key={`privacy-content-section-${index}-item-${itemIndex}`}
                            >
                                {content}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PrivacyContent;
