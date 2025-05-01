import linkText from "@/lib/links/linkText";
import replacePlaceholderWithLinks from "@/lib/links/replacePlaceholderWithLinks";

type TermsContentPiece = {
    title: string;
    description: string;
    listContent?: string[];
};

const terms: TermsContentPiece[] = [
    {
        title: "Acceptance of Terms",
        description:
            "By accessing or using PayForward's services, including our website and mobile application, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
    },
    {
        title: "Use of Service",
        description:
            "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:",
        listContent: [
            "In any way that violates any applicable laws or regulations.",
            "To engage in any activity that interferes with or disrupts our services.",
            "To attempt to gain unauthorised access to any part of our services.",
            "To impersonate or attempt to impersonate PayForward, a PayForward employee, another user, or any other person or entity.",
            "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services, or which, as determined by us, may harm PayForward or users of our services or expose them to liability.",
            "To engage in explicit or implicit threats of violence or harassment.",
            "For the purposes of spam, phishing, or other deceptive practices.",
            "To sell or purchase services that we deem unethical, inappropriate or discriminatory.",
        ],
    },
    {
        title: "Payments",
        description:
            "Payments through connections within the app are not to be taken outside of the app for any reason. Doing so will result in immediate termination of your account. PayForward monitors chats for any suspicious activity and will take action if necessary.",
    },
    {
        title: "Payment Fees",
        description: `PayForward takes a small fee from each transaction a business receives made through the app. The business is not to charge the customer for these fees (i.e. the service should cost the same for the customer in cash as by paying through the app). If a business is found to be charging the customer for these fees, necessary action will be taken. See ${linkText("Pricing", "/docs#pricing")}.`,
    },
    {
        title: "User Accounts",
        description:
            "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.",
    },
    {
        title: "Limitation of Liability",
        description:
            "In no event shall PayForward, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses.",
    },
    {
        title: "Governing Law",
        description:
            "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PayForward operates.",
    },
    {
        title: "Changes to Terms",
        description:
            "We reserve the right to modify these terms at any time. We will provide notice of any significant changes by updating the 'Last updated' date at the top of these Terms and by placing a notice on our site.",
    },
];

const termsContent = terms.map((section) => ({
    ...section,
    description: replacePlaceholderWithLinks(section.description),
    listContent: section.listContent?.map((item) =>
        replacePlaceholderWithLinks(item),
    ),
}));

export default termsContent;
