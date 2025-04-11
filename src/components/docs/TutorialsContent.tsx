import tutorials from "@/data/tutorials";
import React from "react";
import TutorialItem from "./TutorialItem";
interface TutorialsContentProps {
    activeTutorial: string | null;
    onTutorialSelect: (id: string) => void;
}

const TutorialsContent: React.FC<TutorialsContentProps> = ({
    activeTutorial,
    onTutorialSelect,
}) => {
    return (
        <div className="space-y-6">
            {tutorials.map((tutorial) => (
                <TutorialItem
                    key={tutorial.id}
                    tutorial={tutorial}
                    isActive={activeTutorial === tutorial.id}
                    onSelect={onTutorialSelect}
                />
            ))}
            {tutorials.length === 0 && (
                <div className="text-muted-foreground">
                    No tutorials available at the moment.
                </div>
            )}
        </div>
    );
};

export default TutorialsContent;
