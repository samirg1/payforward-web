import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

const Security = () => (
    <div>
        <p>
            We take security seriously and have implemented several measures to
            ensure that your data and transactions are safe. We're a big
            believer in not reinventing the wheel, so we use trusted and
            well-known services to handle sensitive data and transactions. This
            way, we can focus on what we do best, while ensuring that your
            information is in good hands.
        </p>
        <h3 className="mt-8 text-center underline">Your Data</h3>
        <p className="mt-4">
            Our backend infrastructure is built on Google’s Cloud Platform
            (GCP), which offers robust security features like end-to-end
            encryption, automatic scaling, and real-time threat detection. All
            user data is protected using authentication and built-in access
            controls, ensuring only authorised users can access their
            information.
        </p>
        <p className="mt-4">
            GCP is used by companies like The New York Times, Snapchat, Duolingo
            and American Express.
        </p>
        <h3 className="mt-8 text-center underline">Your Transactions</h3>
        <p className="mt-4">
            Payments are securely processed by{" "}
            {replacePlaceholdersWithLinks(
                linkText("Stripe", "https://stripe.com"),
            )}
            , a certified PCI Service Provider Level 1 — the highest level of
            certification in the payments industry.
        </p>
        <p className="mt-4">
            Stripe is used by companies like Amazon, Google, X, and Shopify.
        </p>
        <h3 className="mt-8 text-center underline">Your Interactions</h3>
        <p className="mt-4">
            Your interactions with other accounts are made to be as secure as
            possible. Stripe onboarding allows us to verify that businesses are
            legitimate and operational, and that individuals are who they say
            they are. This is done through a verification process that requires
            businesses to provide certain information and documentation to
            verify their identity and legitimacy. Businesses that are not
            verified will not be able to send quotes or be included in any
            searches.
        </p>
        <p className="mt-4">
            We constantly monitor our platform for any suspicious activity, or
            any content that flags our content moderation system. If we detect
            any activity that we deem goes against our{" "}
            {replacePlaceholdersWithLinks(
                linkText("Terms of Service", "/legal/terms"),
            )}{" "}
            or{" "}
            {replacePlaceholdersWithLinks(
                linkText("Privacy Policy", "/legal/privacy"),
            )}
            , we will take action to remove the content and/or account from our
            platform.
        </p>
    </div>
);

export default Security;
