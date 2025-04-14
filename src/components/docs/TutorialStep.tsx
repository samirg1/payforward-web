import React from "react";

interface TutorialStepProps {
    index: number;
    title: string;
    content: string;
    image: string | null;
}

const TutorialStep: React.FC<TutorialStepProps> = ({
    index,
    title,
    content,
    image,
}) => {
    return (
        <li className="pb-6 border-b last:border-b-0 last:pb-0">
            <h4 className="text-lg font-medium mb-2">
                Step {index + 1}: {title}
            </h4>
            <p className="text-muted-foreground mb-4">{content}</p>
            {image && (
                <div className="mt-4 border rounded-md overflow-hidden bg-muted/20">
                    <img
                        src={`https://source.unsplash.com/${image}`}
                        alt={`Tutorial step: ${title}`}
                        className="w-full h-auto"
                    />
                </div>
            )}
        </li>
    );
};

export default TutorialStep;
