import { Separator } from "@/components/ui/separator";

import termsContent from "@/data/termsContent";

const TermsContent = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                <p className="text-muted-foreground mb-4">
                    Last updated: September 25, 2025
                </p>
                <p className="text-muted-foreground mb-4">
                    Welcome to PayForward. By accessing or using our services,
                    you agree to be bound by these Terms of Service.
                </p>
            </div>

            <Separator />

            {termsContent.map((section, index) => (
                <div key={`terms-content-section-${index}`}>
                    <h3 className="text-xl font-bold mb-3">
                        {index + 1}. {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        {section.description}
                    </p>
                    {section.listContent && (
                        <ul className="list-disc pl-6 text-muted-foreground mb-4">
                            {section.listContent.map((content, itemIndex) => (
                                <li
                                    key={`terms-content-section-${index}-item-${itemIndex}`}
                                >
                                    {content}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TermsContent;
