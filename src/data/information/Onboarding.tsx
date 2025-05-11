import deepLinkText from "@/lib/links/deepLinkText";
import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

const Onboarding = () => (
    <div>
        <h3 className="mb-4 text-center underline">Overview</h3>
        <p className="mb-4">
            Onboarding is the process of verifying a business and ensuring that
            it is legitimate and operational. This is a crucial step in
            maintaining the integrity of our platform and ensuring that users
            can trust the businesses they interact with.
        </p>
        <p className="mb-4 font-semibold">
            A business that is not onboarded will not be able to send quotes or
            be included in any searches.
        </p>
        <p className="mb-4">
            We partner with{" "}
            {replacePlaceholdersWithLinks(
                linkText("Stripe", "https://stripe.com"),
            )}{" "}
            to verify the legitimacy of businesses on our platform. This service
            helps us ensure that all businesses are properly registered and
            compliant with changing local laws and regulations. Doing it this
            way also allows for greater security for transactions.
        </p>
        <p>
            The onboarding process is initiated when a business creates an
            account on our platform. During this process, a 'Connect' account is
            created, which allows the business to receive payments and manage
            its finances through our platform. Since this account is managed by
            Stripe, business details, bank account information, and other
            relevant information are kept away from our platform, ensuring that
            sensitive data is handled securely.
        </p>
        <h3 className="mt-12 text-center underline">Completing Onboarding</h3>
        <p className="mt-4">
            To complete the onboarding process, head to{" "}
            {replacePlaceholdersWithLinks(
                deepLinkText(
                    "Your Account Tab > Menu (☰) > Settings > Business.",
                    "account/settings/business",
                ),
            )}
        </p>
        <p className="mt-4">
            During the onboarding process, businesses are required to provide
            certain information and documentation to verify their identity and
            legitimacy. This may include, but is not limited to, the following:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4">
            <li>
                General business information (e.g., business name, address,
                phone number, email address)
            </li>
            <li>
                Business registration documents (e.g., business license, ABN)
            </li>
            <li>Bank account information for payment processing</li>
            <li>
                Identification documents for the business owner(s) (e.g.,
                passport, driver's license)
            </li>
            <li>Any other relevant documentation</li>
        </ul>
        <p className="mt-4">
            After the review process is complete, you will see in your business
            settings a green tick. This indicates that your business has been
            successfully verified and is now operational on our platform.
        </p>
        <p className="mt-4">
            If you have any questions or concerns about the onboarding process,
            please feel free to{" "}
            {replacePlaceholdersWithLinks(linkText("contact us", "contact"))}{" "}
            for assistance. We are here to help and ensure that your experience
            on our platform is smooth and successful.
        </p>
        <p className="mt-4">
            Please note, once the initial onboarding flow is complete, you may
            have to re-enter it to fill in any missing information. Some fields
            can be easily missed, so please ensure you thoroughly check the
            onboarding flow.
        </p>
    </div>
);

export default Onboarding;
