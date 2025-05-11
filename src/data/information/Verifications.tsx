import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

const verificationImageURL = "/information/verification-example.jpeg";

const Verifications = () => (
    <div>
        <p className="mb-4">
            Verifications are an important part of how we keep interactions safe
            and secure, whilst ensuring that businesses are legitimate and
            accounts represent who they say they are.
        </p>
        <p>
            The verifications are shown on any account page and look like the
            below:
        </p>
        <div className="flex justify-center my-4">
            <img
                src={verificationImageURL}
                alt="Verification Example"
                className="rounded-lg"
            />
        </div>
        <p>
            The verification tick '✓' that is shown after 'BUSINESS' confirms
            that the business has successfully onboarded onto our platform,
            ensuring it is a legitimate and operational entity. Only these
            businesses will show up in search results and be able to send quotes
            and receive payments. Learn more about onboarding{" "}
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
        <br />
        <p>
            The green verification is awarded based on community recognition. It
            represents a business that consistently goes above and beyond,
            earning high praise and trust from customers. {<br />}
            This is a manual process and requires businesses to consistently
            demonstrate exceptional service and reliability. It is a mark of
            trust and excellence within the community.
        </p>
    </div>
);

export default Verifications;
