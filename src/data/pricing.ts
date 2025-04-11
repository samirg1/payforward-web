import replacePlaceholderWithLinks from "@/lib/replacePlaceholderWithLinks";
import linkText from "@/lib/linkText";

type PricingPiece = {
    title: string;
    subtitle: string;
    description?: string;
    content: [string, string][];
    listType: "ordered" | "unordered";
};

const pricing: PricingPiece[] = [
    {
        title: "Setup and Ongoing Costs",
        subtitle: "No hidden fees, no surprises.",
        description:
            "We believe in transparency. Our pricing is straightforward, with no hidden fees or unexpected costs.",
        content: [
            [
                "Free to Download",
                "The app is free to download and use. No upfront costs.",
            ],
            [
                "No Monthly Fees",
                "No monthly subscription fees for users or businesses.",
            ],
            [
                "Transaction Fees",
                "A small fee is taken from the business on each transaction made through the app.",
            ],
        ],
        listType: "unordered",
    },
    {
        title: "Payment Processing",
        subtitle: "We charge a small fee to the business for each transaction.",
        description:
            "To keep the app running and to ensure secure transactions, we charge a small fee for each payment processed through the app. Here's how it works:",
        content: [
            [
                "No Fees for Customers",
                "Customers do not pay any fees paying on the app. The fee is taken out of the business' received payment.",
            ],
            [
                "Fixed Fee",
                "A fixed fee of 30c is charged for each transaction, regardless of the amount. For this reason the minimum transaction amount is $1.",
            ],
            [
                "Percentage Fee",
                "A percentage fee of 3.7% is charged on the total transaction amount.",
            ],
            [
                "Example",
                "If a customer pays $100 to a business, the business receives $96.30 after fees.",
            ],
            [
                "Important Note",
                `As per the ${linkText("Terms of Service", "/legal#terms")}, the business is not to charge the customer for these fees. These fees are to keep our servers running, and to ensure secure transactions.`,
            ]
        ],
        listType: "unordered",
    },
];

const pricingContent = pricing.map((section) => ({
    ...section,
    description: replacePlaceholderWithLinks(section.description),
    content: section.content.map((item) => [
        replacePlaceholderWithLinks(item[0]),
        replacePlaceholderWithLinks(item[1]),
    ]),
}));

export default pricingContent;
