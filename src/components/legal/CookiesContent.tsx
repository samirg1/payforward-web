import { Separator } from "@/components/ui/separator";

const CookiesContent = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
                <p className="text-muted-foreground mb-4">
                    Last updated: September 25, 2025
                </p>
                <p className="text-muted-foreground mb-4">
                    This Cookie Policy explains how PayForward uses cookies and
                    similar technologies to recognise you when you visit our
                    website and mobile application.
                </p>
            </div>

            <Separator />

            <div>
                <h3 className="text-xl font-bold mb-3">1. What are Cookies?</h3>
                <p className="text-muted-foreground mb-4">
                    Cookies are small text files that are stored on your device
                    when you visit a website. They are widely used to make
                    websites work more efficiently and provide information to
                    the website owners.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-3">
                    2. Types of Cookies We Use
                </h3>
                <p className="text-muted-foreground mb-4">
                    We use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                    <li>
                        <strong>Essential Cookies:</strong> These are necessary
                        for the website to function properly.
                    </li>
                    <li>
                        <strong>Functionality Cookies:</strong> These remember
                        your preferences and settings.
                    </li>
                    <li>
                        <strong>Analytics Cookies:</strong> These help us
                        understand how visitors interact with our website.
                    </li>
                    <li>
                        <strong>Marketing Cookies:</strong> These track your
                        online activity to help deliver relevant advertising.
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-3">3. Managing Cookies</h3>
                <p className="text-muted-foreground mb-4">
                    You can control and manage cookies in various ways. Most
                    browsers allow you to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                    <li>Delete all cookies</li>
                    <li>Block all cookies</li>
                    <li>Allow only certain cookies</li>
                    <li>Clear cookies when you close your browser</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                    Please note that blocking cookies may affect the
                    functionality of our website and services.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-3">
                    4. Changes to this Cookie Policy
                </h3>
                <p className="text-muted-foreground mb-4">
                    We may update our Cookie Policy from time to time. We will
                    notify you of any changes by posting the new Cookie Policy
                    on this page and updating the "Last updated" date.
                </p>
            </div>
        </div>
    );
};

export default CookiesContent;
