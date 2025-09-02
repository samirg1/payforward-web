import { Mail, Phone } from "lucide-react";

import Page from "@/pages/Page";

import FadeIn from "@/components/FadeIn";

import {
    FEEDBACK_EMAIL,
    INFO_EMAIL,
    SOCIAL_LINKS_MAPPINGS,
    SUPPORT_ADDRESS,
    SUPPORT_EMAIL,
    SUPPORT_HOURS,
    SUPPORT_PHONE,
} from "@/data/constants";

const Contact = () => {
    return (
        <Page navLinkFrom="Contact">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <FadeIn duration={100} className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-muted-foreground">
                            Have questions or feedback? We'd love to hear from
                            you.
                        </p>
                    </FadeIn>

                    <FadeIn
                        duration={150}
                        className="bg-white rounded-lg shadow-sm border p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-6">
                            Get in Touch
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Mail className="text-primary h-6 w-6 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-1">Email</h3>
                                    <p>
                                        <a
                                            href={`mailto:${SUPPORT_EMAIL}`}
                                            className="text-primary hover:underline"
                                        >
                                            {SUPPORT_EMAIL}
                                        </a>{" "}
                                        - For technical support
                                    </p>
                                    <p className="mt-1">
                                        <a
                                            href={`mailto:${FEEDBACK_EMAIL}`}
                                            className="text-primary hover:underline"
                                        >
                                            {FEEDBACK_EMAIL}
                                        </a>{" "}
                                        - For feedback
                                    </p>
                                    <p className="mt-1">
                                        <a
                                            href={`mailto:${INFO_EMAIL}`}
                                            className="text-primary hover:underline"
                                        >
                                            {INFO_EMAIL}
                                        </a>{" "}
                                        - For general inquiries
                                    </p>
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                {Object.entries(SOCIAL_LINKS_MAPPINGS).map(
                                    ([key, { url, Icon }]) => {
                                        if (!url) return null;
                                        return (
                                            <a
                                                key={key}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Icon className="w-[24px] h-[24px]" />
                                            </a>
                                        );
                                    },
                                )}
                            </div>

                            {SUPPORT_PHONE && (
                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary h-6 w-6 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {SUPPORT_PHONE}
                                        </p>
                                        {SUPPORT_HOURS && (
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {SUPPORT_HOURS}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {SUPPORT_ADDRESS && (
                                <div className="mt-6 pt-6 border-t">
                                    <h3 className="font-medium mb-2">Office</h3>
                                    <address className="text-muted-foreground not-italic">
                                        {SUPPORT_ADDRESS}
                                    </address>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Page>
    );
};

export default Contact;
