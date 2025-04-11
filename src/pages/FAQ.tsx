import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import faqs from "@/data/faqs";

const FAQ = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 pt-24 pb-16 mt-6">
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

                        {faqs.length === 0 && (
                            <div className="text-muted-foreground p-10 text-center">
                                No FAQs available at the moment. Please check
                                back later.
                            </div>
                                )}

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
