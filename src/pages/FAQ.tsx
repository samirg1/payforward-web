import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "How do I download the app?",
            answer: "Our app is available on both iOS and Android platforms. You can download it from the Apple App Store or Google Play Store by searching for 'AppGlance'.",
        },
        {
            question: "Is there a cost to use the app?",
            answer: "The basic version of our app is free to use. We also offer a premium subscription with additional features for $4.99 per month or $49.99 annually.",
        },
        {
            question: "How do I create an account?",
            answer: "You can create an account by downloading the app and selecting 'Sign Up' on the welcome screen. You can register using your email address, Google account, or Apple ID.",
        },
        {
            question: "Can I use the app offline?",
            answer: "Yes, many features of our app work offline. However, some functionality that requires server connectivity, such as syncing data or real-time messaging, will only be available when you're connected to the internet.",
        },
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by selecting 'Forgot Password' on the login screen. We'll send a password reset link to your registered email address.",
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we take data security very seriously. All data is encrypted both in transit and at rest. We implement industry-standard security protocols and regularly update our security measures.",
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team through the 'Help & Support' section in the app settings, or visit our Contact page on our website to submit a request.",
        },
        {
            question: "Can I sync my data across multiple devices?",
            answer: "Yes, when you sign in with the same account on different devices, your data will automatically sync across all devices.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Find answers to common questions about our
                                mobile app.
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="mb-8">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                >
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="bg-muted/50 p-6 rounded-lg text-center">
                            <h3 className="font-semibold mb-2">
                                Still have questions?
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                Our support team is here to help you with any
                                questions you might have.
                            </p>
                            <a
                                href="/contact"
                                className="text-primary hover:underline font-medium"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FAQ;
