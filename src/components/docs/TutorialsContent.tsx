import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TutorialItem from "@/components/docs/TutorialItem";

import useNavigate from "@/hooks/useNavigate";

import tutorials from "@/data/tutorials";

const TutorialsContent = () => {
    const [activeTutorial, setActiveTutorial] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const hash = location.hash.substring(1);
        setActiveTutorial(hash);
        const section = document.getElementById(hash);
        if (section)
            section.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [location]);

    const handleSectionClick = (sectionId: string) => {
        if (activeTutorial === sectionId) return setActiveTutorial(null);
        navigate(`#${sectionId}`);
        setActiveTutorial((prev) => (prev === sectionId ? null : sectionId));
    };

    return (
        <div className="space-y-6">
            {tutorials.map((tutorial) => (
                <TutorialItem
                    key={tutorial.id}
                    tutorial={tutorial}
                    isActive={activeTutorial === tutorial.id}
                    onSelect={handleSectionClick}
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
