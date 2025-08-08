import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import useNavigate from "@/hooks/useNavigate";

import faqs from "@/data/faqs";

const FAQ_QUERY_KEY = "q";

function getFaqFromSearch(search: string) {
    const params = new URLSearchParams(search);
    return params.get(FAQ_QUERY_KEY);
}

const Faq = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openItem, setOpenItem] = useState<string | undefined>(undefined);

    // On mount, set openItem from URL
    useEffect(() => {
        const faqValue = getFaqFromSearch(location.search);
        if (faqValue) setOpenItem(faqValue);
    }, [location.search]);

    // When openItem changes, update the URL
    useEffect(() => {
        if (openItem) {
            const params = new URLSearchParams(location.search);
            params.set(FAQ_QUERY_KEY, openItem);
            navigate({ search: params.toString() }, { replace: true });
            return;
        }
        const params = new URLSearchParams(location.search);
        params.delete(FAQ_QUERY_KEY);
        navigate({ search: params.toString() }, { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openItem]);

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answerRaw,
                            },
                        })),
                    })}
                </script>
            </Helmet>
            <Page navLinkFrom="FAQ">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <FadeIn duration={100} className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Find answers to common questions about our app.
                            </p>
                        </FadeIn>

                        <Accordion
                            type="single"
                            collapsible
                            className="mb-8"
                            value={openItem}
                            onValueChange={setOpenItem}
                        >
                            {faqs.map((faq, index) => (
                                <FadeIn
                                    key={faq.id}
                                    duration={index * 25 + 100}
                                >
                                    <AccordionItem key={faq.id} value={faq.id}>
                                        <AccordionTrigger className="text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </FadeIn>
                            ))}
                        </Accordion>

                        {faqs.length === 0 && (
                            <div className="text-muted-foreground p-10 text-center">
                                No FAQs available at the moment. Please check
                                back later.
                            </div>
                        )}

                        <FadeIn
                            duration={150}
                            className="bg-muted/50 p-6 rounded-lg text-center"
                        >
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
                        </FadeIn>
                    </div>
                </div>
            </Page>
        </>
    );
};

export default Faq;
