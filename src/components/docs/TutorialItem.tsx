import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

import TutorialStep from "@/components/docs/TutorialStep";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Tutorial } from "@/data/tutorials";

interface TutorialItemProps {
    tutorial: Tutorial;
    isActive: boolean;
    onSelect: (id: string) => void;
}

const TutorialItem: React.FC<TutorialItemProps> = ({
    tutorial,
    isActive,
    onSelect,
}) => {
    return (
        <Collapsible
            id={tutorial.id}
            key={tutorial.id}
            open={isActive}
            onOpenChange={() => onSelect(tutorial.id)}
            className="border rounded-lg overflow-hidden"
        >
            <CollapsibleTrigger className="flex justify-between items-center w-full p-6 hover:bg-muted/50 transition-colors">
                <div className="text-left">
                    <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                    <p className="text-muted-foreground">
                        {tutorial.description}
                    </p>
                </div>
                {isActive ? (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                ) : (
                    <ChevronRight className="h-5 w-5 flex-shrink-0" />
                )}
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="px-6 pb-6 pt-2">
                    <ol className="space-y-8">
                        {tutorial.steps.map((step, index) => (
                            <TutorialStep
                                key={index}
                                index={index}
                                title={step.title}
                                content={step.content}
                                image={step.image}
                            />
                        ))}
                    </ol>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default TutorialItem;
