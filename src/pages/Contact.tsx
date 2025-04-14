import { Mail, Phone } from "lucide-react";

import Page from "@/pages/Page";

import {
    feedbackEmail,
    infoEmail,
    supportAddress,
    supportEmail,
    supportHours,
    supportPhone,
} from "@/data/constants";

const Contact = () => {
    return (
        <Page>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-muted-foreground">
                            Have questions or feedback? We'd love to hear from
                            you.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-8">
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
                                            href={`mailto:${supportEmail}`}
                                            className="text-primary hover:underline"
                                        >
                                            {supportEmail}
                                        </a>{" "}
                                        - For technical support
                                    </p>
                                    <p className="mt-1">
                                        <a
                                            href={`mailto:${feedbackEmail}`}
                                            className="text-primary hover:underline"
                                        >
                                            {feedbackEmail}
                                        </a>{" "}
                                        - For feedback
                                    </p>
                                    <p className="mt-1">
                                        <a
                                            href={`mailto:${infoEmail}`}
                                            className="text-primary hover:underline"
                                        >
                                            {infoEmail}
                                        </a>{" "}
                                        - For general inquiries
                                    </p>
                                </div>
                            </div>

                            {supportPhone && (
                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary h-6 w-6 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {supportPhone}
                                        </p>
                                        {supportHours && (
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {supportHours}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {supportAddress && (
                                <div className="mt-6 pt-6 border-t">
                                    <h3 className="font-medium mb-2">Office</h3>
                                    <address className="text-muted-foreground not-italic">
                                        {supportAddress}
                                    </address>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Contact;
