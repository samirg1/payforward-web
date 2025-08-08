import FadeIn from "../FadeIn";
import HowItWorks from "../home/HowItWorks";

import ConditionalWrapper from "@/components/ConditionalWrapper";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import quickStart from "@/data/quickStart";

const QuickStartContent = () => {
    return (
        <>
            {quickStart.map((section, index) => (
                <FadeIn duration={100 + index * 100}>
                    <Card
                        key={`quickStart-content-${section.title}-${index}`}
                        className={`${
                            index === quickStart.length - 1 ? "mb-0" : "mb-8"
                        }`}
                    >
                        <CardHeader>
                            <CardTitle>{section.title}</CardTitle>
                            <CardDescription>
                                {section.subtitle}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            {section.description && (
                                <p className="mb-4 text-muted-foreground">
                                    {section.description}
                                </p>
                            )}
                            <ConditionalWrapper
                                condition={section.listType === "ordered"}
                                wrapperIfTrue={(children) => (
                                    <ol className="list-decimal pl-5 space-y-3">
                                        {children}
                                    </ol>
                                )}
                                wrapperIfFalse={(children) => (
                                    <ul className="list-disc pl-5 space-y-3">
                                        {children}
                                    </ul>
                                )}
                            >
                                {section.content.map((item, itemIndex) => {
                                    const [heading, ...content] = item;
                                    return (
                                        <li
                                            key={`list-content-${item}-${itemIndex}`}
                                        >
                                            <strong>{heading}</strong>
                                            {content.map(
                                                (subItem, subIndex) => {
                                                    return (
                                                        <p
                                                            className="text-muted-foreground mt-1"
                                                            key={`sub-item-${subIndex}`}
                                                        >
                                                            {subItem}
                                                        </p>
                                                    );
                                                },
                                            )}
                                        </li>
                                    );
                                })}
                            </ConditionalWrapper>
                        </CardContent>
                    </Card>
                </FadeIn>
            ))}
            <FadeIn duration={100} className="w-full flex-1">
                <HowItWorks />
            </FadeIn>
        </>
    );
};

export default QuickStartContent;
