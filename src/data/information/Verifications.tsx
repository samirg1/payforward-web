import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

const verificationImageURL = "/information/verification-example.png";

const Verifications = () => (
    <div>
        <p className="mb-4">
            Verifications are an important part of how we keep interactions safe
            and secure, whilst ensuring that businesses are legitimate and
            accounts represent who they say they are.
        </p>
        <p>
            Verifications are shown on account pages that have them and look
            like the below:
        </p>
        <div className="flex justify-center my-4">
            <img
                src={verificationImageURL}
                alt="Verification Example"
                className="rounded-lg h-24"
            />
        </div>
        <p>
            The green badge 'BUSINESS' confirms that the business has
            successfully onboarded onto our platform, ensuring it is a
            legitimate and operational entity. Only these businesses will show
            up in search results and be able to send quotes and receive
            payments. Learn more about onboarding{" "}
            {replacePlaceholdersWithLinks(
                linkText("here.", "/docs#information-onboarding"),
            )}
        </p>
        <br />
        <p>
            The blue verification tick is reserved for notable businesses or
            individuals, similar to the Instagram blue tick. It signifies
            credibility and trust, and ensures that the account is actually the
            notable business or individual it claims to be. {<br />}
            To receive this verification, accounts must apply (via email) with
            proof of their identity and/or business. This is a manual process
            and requires verification from our team.
        </p>
    </div>
);

export default Verifications;
