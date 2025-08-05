import deepLinkText from "@/lib/links/deepLinkText";
import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";





const Payments = () => (
    <div>
        <h3 className="mb-4 text-center underline">Overview</h3>
        <p className="mb-4">
            Payments are a crucial part of our platform, allowing businesses to
            receive funds for the services they provide. We use a secure and
            reliable payment processing system to ensure that all transactions
            are handled safely and efficiently.
        </p>
        <p className="mb-4 font-semibold">
            A business that is not{" "}
            {replacePlaceholdersWithLinks(
                linkText("onboarded", "docs#information-onboarding"),
            )}{" "}
            will not be able to receive payments.
        </p>
        <p className="mb-4">
            We partner with{" "}
            {replacePlaceholdersWithLinks(
                linkText("Stripe", "https://stripe.com"),
            )}{" "}
            to handle all payment processing. This service helps us ensure that
            all transactions are secure and compliant with local laws and
            regulations. Using Stripe also allows for greater security for
            transactions, as sensitive data is handled by a trusted third party.
        </p>
        <h3 className="mt-12 text-center underline">Payment Flow</h3>
        <p className="mt-4">
            A business can initiate a payment by sending a quote through the
            app. Once the customer accepts the quote, they can pay directly
            through the app using their preferred payment method. The funds are
            then transferred to the business's Stripe account, from which they
            can be withdrawn to their bank account. You can view more about your
            Stripe account and money withdrawals on the app's{" "}
            {replacePlaceholdersWithLinks(
                deepLinkText("Payment Tab > Dashboard", "payment-dashboard"),
            )}
            .
        </p>
        <p className="mt-4">
            Once a payment has succeeded, the business will receive a
            notification, and both the customer and business will receive emails
            to confirm successful payment. The customer will also receive a
            receipt for their records.
        </p>
        <p className="mt-4">
            Due to Stripe policy, the funds will not be available for withdrawal
            immediately. There is a 7-day hold period for new accounts, and
            after that, funds will be available after 2 days. This is to ensure
            that there are no disputes or charge-backs on the payment. Whilst
            the funds may not in the business's account, there is no need to
            worry, as the funds are still secure and will be available for
            withdrawal immediately once the hold period is over.
        </p>
        <h3 className="mt-12 text-center underline">Disputes</h3>
        <p className="mt-4">
            Disputes are to be handled{" "}
            <p className="font-semibold underline italic inline">directly between the customer and the business.</p> If a customer
            has an issue with a payment, they can contact the business directly
            through the app to resolve the issue or by any other means. Only if the issue cannot be
            resolved the customer can{" "}
            {replacePlaceholdersWithLinks(linkText("contact us", "contact"))}{" "}
            for assistance. We will do our best to help resolve the issue, but
            we cannot guarantee a resolution. It is important to note that
            disputes should be handled professionally and respectfully, as we
            want to maintain a positive and trustworthy environment for all
            users.
        </p>
        <p className="mt-4">
            Please also note that refunds given by business or initiated by us may
            not include any transaction fees that were charged at the time of the
            payment.
        </p>
        <p className="mt-4">
            Please note, once the initial onboarding flow is complete, you may
            have to re-enter it to fill in any missing information. Some fields
            can be easily missed, so please ensure you thoroughly check the
            onboarding flow.
        </p>
    </div>
);

export default Payments;
