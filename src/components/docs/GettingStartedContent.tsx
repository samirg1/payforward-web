import ConditionalWrapper from "@/components/ConditionalWrapper";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import gettingStartedContent from "@/data/gettingStarted";

const GettingStartedContent = () => {
    return (
        <>
            {gettingStartedContent.map((section, index) => (
                <Card
                    key={`getting-started-content-${section.title}-${index}`}
                    className={`${
                        index === gettingStartedContent.length - 1 ? "mb-0" : "mb-8"
                    }`}
                >
                    <CardHeader>
                        <CardTitle>{section.title}</CardTitle>
                        <CardDescription>{section.subtitle}</CardDescription>
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
                            {section.content.map((item, itemIndex) => (
                                <li key={`list-content-${item}-${itemIndex}`}>
                                    <strong>{item[0]}</strong>
                                    <p className="text-muted-foreground mt-1">
                                        {item[1]}
                                    </p>
                                </li>
                            ))}
                        </ConditionalWrapper>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default GettingStartedContent;
