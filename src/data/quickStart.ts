import linkText from "@/lib/links/linkText";
import replacePlaceholderWithLinks from "@/lib/links/replacePlaceholderWithLinks";

type QuickStartContentPiece = {
    title: string;
    subtitle: string;
    description?: string;
    content: string[][];
    listType: "ordered" | "unordered";
};

const quickStart: QuickStartContentPiece[] = [
    {
        title: "Quick Start Setup",
        subtitle: "Easy steps to get started.",
        content: [
            [
                "Download the App and Understand How We Work",
                `Get the latest version from the App Store or Google Play Store and read our ${linkText("Terms of Service", "/legal/terms")} and ${linkText("Privacy Policy", "/legal/privacy")}.`,
            ],
            ["Create an Account", "Sign up using your email."],
            [
                "Setup Your Profile / Business Account",
                `Complete your profile, and ${linkText("onboard", "/docs/information/onboarding")} your business if applicable.`,
            ],
            [
                "Get Started!",
                `If you're looking for a service, post a ${linkText("listing", "/docs/information/listings")} and let a business find you, otherwise ${linkText("search", "/docs/information/search")} to find what you need.`,
                `If you're a business, respond to listing notifications in your area, browse listings tailored to you, reach out to customers and start sending quotes!
                `,
            ],
            [
                "Need Help?",
                `Check out our ${linkText("full documentation", "/docs/information")}, ${linkText("tutorials", "/docs/tutorials")} and ${linkText("FAQs", "/faq")} for assistance.`,
                `${linkText("Contact us", "/contact")} if you have any further queries.`,
            ],
        ],
        listType: "ordered",
    },
];

const quickStartContent = quickStart.map((section) => ({
    ...section,
    content: section.content.map((item) =>
        item.map((text) => replacePlaceholderWithLinks(text)),
    ),
}));

export default quickStartContent;
