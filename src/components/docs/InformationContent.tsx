import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Separator } from "@/components/ui/separator";

import information from "@/data/information";

const InformationContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (!hash.startsWith("information-")) return;

        const sectionId = hash.replace("information-", "");
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    }, [location]);

    const handleSectionClick = (sectionId: string) => {
        navigate(`#information-${sectionId}`);
    };

    return (
        <div>
            {information.length !== 0 && (
                <div className="mb-8">
                    {information.length !== 0 && (
                        <h3 className="text-xl font-medium mb-4">
                            Jump to Section
                        </h3>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {information.map((section) => (
                            <button
                                key={section.id}
                                className="px-3 py-1 bg-muted rounded-md text-sm hover:bg-primary/10 transition-colors"
                                onClick={() => handleSectionClick(section.id)}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-8">
                {information.map((section, index) => (
                    <div
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-20"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            {section.title}
                        </h3>
                        <div className="text-muted-foreground">
                            {section.content}
                        </div>
                        {index < information.length - 1 && (
                            <Separator className="mt-8" />
                        )}
                    </div>
                ))}
                {information.length === 0 && (
                    <div className="text-muted-foreground">
                        No information available at the moment.
                    </div>
                )}
            </div>
        </div>
    );
};

export default InformationContent;
