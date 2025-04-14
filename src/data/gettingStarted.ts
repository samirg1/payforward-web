import linkText from "@/lib/linkText";
import replacePlaceholderWithLinks from "@/lib/replacePlaceholderWithLinks";

type GettingStartedContentPiece = {
    title: string;
    subtitle: string;
    description?: string;
    content: [string, string][];
    listType: "ordered" | "unordered";
};

const gettingStarted: GettingStartedContentPiece[] = [
    {
        title: "Installation Guide",
        subtitle: "Learn how to install and set up the app",
        content: [
            [
                "Download the App",
                "Get the latest version from the App Store or Google Play Store.",
            ],
            [
                "Understand How We Work",
                `Read our ${linkText("Terms of Service", "/legal#terms")} and ${linkText("Privacy Policy", "/legal#privacy")}.`,
            ],
            ["Create an Account", "Sign up using your email."],
            [
                "Setup Your Profile & Business Account",
                "Complete your profile, and onboard your business if applicable.",
            ],
            ["Get Started!", "Find customers, send quotes and get connected."],
        ],
        listType: "ordered",
    },
    {
        title: "Basic Usage",
        subtitle: "Getting started with the core features",
        description:
            "Once you have the app setup, you can start using the core features. Here's a quick overview:",
        content: [
            [
                "Search",
                "Search for anything you need at a glance, only see verified businesses (or customers if you are a verified business).",
            ],
            [
                "Conversations",
                "Connect, send quotes and keep in touch with businesses / customers.",
            ],
            [
                "Account",
                "Manage your account, add posts and tailor your profile to your needs.",
            ],
        ],
        listType: "unordered",
    },
];

const gettingStartedContent = gettingStarted.map((section) => ({
    ...section,
    content: section.content.map((item) => [
        replacePlaceholderWithLinks(item[0]),
        replacePlaceholderWithLinks(item[1]),
    ]),
}));

export default gettingStartedContent;
