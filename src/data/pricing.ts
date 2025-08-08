import linkText from "@/lib/links/linkText";
import replacePlaceholderWithLinks from "@/lib/links/replacePlaceholderWithLinks";

export type PricingContentPieceExtras = "paymentCalculator";

type PricingPiece = {
    title: string;
    subtitle: string;
    description?: string;
    content: [
        title: string,
        description: string,
        extra?: PricingContentPieceExtras,
    ][];
    listType: "ordered" | "unordered";
};

const pricing: PricingPiece[] = [
    {
        title: "Setup and Ongoing Costs - Free",
        subtitle: "Transparent pricing with no surprises.",
        description:
            "Our pricing is simple and clear. No hidden fees and no unexpected charges.",
        content: [
            [
                "Free to Download",
                "The app is completely free to download and use. No upfront charges.",
            ],
            [
                "No Ongoing Fees",
                "Enjoy the app without any ongoing subscription costs for users or businesses.",
            ],
            [
                "Transaction Fees",
                "A small fee is charged to the business for each transaction processed through the app.",
            ],
        ],
        listType: "unordered",
    },
    {
        title: "Payment Processing - 3.7% + 30¢",
        subtitle: "Affordable and transparent transaction fees.",
        description:
            "To maintain the app and ensure secure payments, we charge a small fee for each transaction. Here's a breakdown:",
        content: [
            [
                "No Fees for Customers",
                "Customers pay no fees when using the app. The transaction fee is deducted from the business' payment.",
            ],
            [
                "Fixed Fee",
                "A flat fee of 30¢ is applied to every transaction, regardless of the amount. The minimum transaction amount is $1.",
            ],
            [
                "Percentage Fee",
                "A 3.7% fee is applied to the total transaction amount. This rate is fixed and does not vary.",
            ],
            [
                "Example",
                "For a $100 payment, the business receives $96.00 after fees. Note: rounding adjustments may apply (± 1¢).",
                "paymentCalculator",
            ],
            [
                "Important Note",
                `As outlined in our ${linkText(
                    "Terms of Service",
                    "/legal/terms",
                )}, businesses are prohibited from passing these fees onto customers. These fees support our infrastructure and ensure secure transactions.`,
            ],
            [
                "Why 3.7%?",
                "We pay 1.7% (+ 30¢) to our payment processor to ensure the highest level of security and reliability. The remaining 2% covers our operational costs, ensuring we can continue to provide a high-quality service.",
            ],
            [
                "More Information",
                `For more details on how payments work, please refer to our ${linkText(
                    "payments documentation",
                    "/docs/information/payments",
                )}.`,
            ],
        ],
        listType: "unordered",
    },
];

const pricingContent = pricing.map((section) => ({
    ...section,
    description: replacePlaceholderWithLinks(section.description),
    content: section.content.map((item) => ({
        title: replacePlaceholderWithLinks(item[0]),
        description: replacePlaceholderWithLinks(item[1]),
        extra: item[2] ? item[2] : undefined,
    })),
}));

export default pricingContent;
