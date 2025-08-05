import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

type FAQ = {
    question: string;
    answer: string | React.ReactNode;
    answerRaw: string;
};

const faqs: FAQ[] = [
    {
        question: "What is PayForward and how does it work?",
        answer: "PayForward is an Australian business marketplace with a goal to support local businesses and help them grow. PayForward connects businesses with local customers, allowing them to find and book services easily. Customers can search for businesses, post listings for requested services, and make secure payments through the app.",
    },
    {
        question: "Can I use PayForward outside Victoria?",
        answer: "Yes, PayForward is available across all of Australia. You can search for businesses and services in your local area or anywhere in the country.",
    },
    {
        question: "What kinds of services can I find on PayForward?",
        answer: `We aim to be as flexible as possible as a platform, allowing almost any local service to be listed. The only boundaries are that the service must be legal and not violate our ${linkText("Terms of Service", "/legal#terms")}.`,
    },
    {
        question: "What is the pricing structure for using PayForward?",
        answer: `PayForward is free to download and use. We charge businesses a small transaction fee of 3.7% + 30¢ for each payment processed through the app. Customers pay no fees when booking services. For more details, check out our ${linkText("Pricing", "/docs#pricing")}.`,
    },
    {
        question: "How do I know if a business is on PayForward?",
        answer: "You can browse the PayForward app to see verified local businesses in your area. Each business has a profile, location and reviews. If a business isn’t listed yet, you can invite them to join!",
    },
    {
        question: "Is it free to use PayForward as a customer?",
        answer: "Yes — it’s completely free to download and use PayForward as a customer. You only pay for the services you book through the app.",
    },
    {
        question: "Are businesses charged to join PayForward?",
        answer: `No, businesses only pay a small fee per transaction — there are no upfront costs to join or stay on the platform. This ensures our platform is fair and performance-based.`,
    },
    {
        question: "Do I need to be in Australia to use PayForward?",
        answer: "Yes, PayForward is currently available to customers and businesses located in Australia only.",
    },
    {
        question: "How does PayForward support local businesses?",
        answer: "We help small businesses get discovered by local customers with location based searching, listings, and recommendations — all while giving them a low-fee, fair platform to grow on.",
    },
    {
        question: "Is PayForward safe and secure?",
        answer: `Absolutely. We use secure payment gateways and verify all businesses before they join. Learn more about ${linkText("how we keep your data safe.", "/docs#information-security")}.`,
    },
    {
        question: "What payment methods can I use?",
        answer: "You can pay using debit/credit cards, including Apple Pay and Google Pay. All payments are processed securely through our Stripe integration.",
    },
    {
        question: "What if I have an issue with a business or service?",
        answer: `If you have any issues, the direct point of the contact is that business, just as you would normally. If issues persist and need further assistance, please ${linkText("contact us", "/contact")} and we will do our best to help resolve the issue.`,
    }
].map((faq) => ({
    ...faq,
    answer: replacePlaceholdersWithLinks(faq.answer),
    answerRaw: replacePlaceholdersWithLinks(faq.answer, true),
}));

export default faqs;
