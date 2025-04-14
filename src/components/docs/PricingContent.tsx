import { useState } from "react";

import ConditionalWrapper from "@/components/ConditionalWrapper";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import type { PricingContentPieceExtras } from "@/data/pricing";
import pricing from "@/data/pricing";

const PricingCalculator = () => {
    const [amount, setAmount] = useState<number | null>(null);

    return (
        <div className="text-center">
            <p className="inline text-muted-foreground mr-2">$</p>
            <Input
                type="number"
                placeholder="Enter Amount"
                className="border border-border rounded-md p-2 mt-2 w-40 inline"
                min="1"
                max="100000"
                step="1"
                onChange={(e) => {
                    const value = e.target.value;
                    // Check if the value is a valid number
                    const number = Number(value);
                    const isValidNumber = !isNaN(number) && number >= 1;
                    setAmount(isValidNumber ? number : null);
                }}
                value={amount || ""}
            />
            <p className="text-muted-foreground ml-2 inline">
                {amount
                    ? `$${(amount * 0.963 - 0.3).toFixed(2)} after fees`
                    : ""}
            </p>
        </div>
    );
};

const extraToComponent: Record<
    PricingContentPieceExtras,
    () => React.ReactNode
> = {
    paymentCalculator: () => <PricingCalculator />,
};

const PricingContent = () => {
    return (
        <>
            {pricing.map((section, index) => (
                <Card
                    key={`getting-started-content-${section.title}-${index}`}
                    className={`${index === pricing.length - 1 ? "mb-0" : "mb-8"}`}
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
                                    <strong>{item.title}</strong>
                                    <p className="text-muted-foreground mt-1">
                                        {item.description}
                                    </p>
                                    {item.extra &&
                                        extraToComponent[item.extra]()}
                                </li>
                            ))}
                        </ConditionalWrapper>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default PricingContent;
