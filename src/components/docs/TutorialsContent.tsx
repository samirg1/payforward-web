
import React from "react";
import TutorialItem from "./TutorialItem";
import { Tutorial } from "@/data/tutorialsList";

interface TutorialsContentProps {
  tutorials: Tutorial[];
  activeTutorial: string | null;
  onTutorialSelect: (id: string) => void;
}

const TutorialsContent: React.FC<TutorialsContentProps> = ({ 
  tutorials, 
  activeTutorial, 
  onTutorialSelect 
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
    </div>
  );
};

export default TutorialsContent;
