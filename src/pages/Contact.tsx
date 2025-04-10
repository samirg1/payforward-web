import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNav />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">
                                Contact Us
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Have questions or feedback? We'd love to hear
                                from you.
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
                                        <h3 className="font-medium mb-1">
                                            Email
                                        </h3>
                                        <p>
                                            <a
                                                href="mailto:support@appglance.com"
                                                className="text-primary hover:underline"
                                            >
                                                support@appglance.com
                                            </a>{" "}
                                            - For general inquiries
                                        </p>
                                        <p className="mt-1">
                                            <a
                                                href="mailto:help@appglance.com"
                                                className="text-primary hover:underline"
                                            >
                                                help@appglance.com
                                            </a>{" "}
                                            - For technical support
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary h-6 w-6 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-muted-foreground">
                                            +1 (555) 123-4567
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Monday - Friday: 9am - 5pm PST
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t">
                                    <h3 className="font-medium mb-2">Office</h3>
                                    <address className="text-muted-foreground not-italic">
                                        123 App Street
                                        <br />
                                        Suite 456
                                        <br />
                                        San Francisco, CA 94103
                                        <br />
                                        United States
                                    </address>
                                </div>

                                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-8">
                                    <p className="text-amber-800">
                                        Our app is coming soon! We're currently
                                        finalizing development and will announce
                                        the release date shortly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
