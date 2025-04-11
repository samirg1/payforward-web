
import { Separator } from "@/components/ui/separator";

const PrivacyContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-muted-foreground mb-4">
          Last updated: April 11, 2025
        </p>
        <p className="text-muted-foreground mb-4">
          This Privacy Policy describes how PayForward collects, uses, and shares your personal information when you use our services.
        </p>
      </div>

      <Separator />

      <div>
        <h3 className="text-xl font-bold mb-3">1. Information We Collect</h3>
        <p className="text-muted-foreground mb-4">
          We collect several types of information from and about users of our services, including:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-4">
          <li>Personal information such as name, email address, and payment information.</li>
          <li>Usage data about how you interact with our services.</li>
          <li>Device information including IP address, browser type, and operating system.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">2. How We Use Your Information</h3>
        <p className="text-muted-foreground mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-4">
          <li>Provide, maintain, and improve our services.</li>
          <li>Process transactions and send transaction notifications.</li>
          <li>Respond to your comments, questions, and requests.</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">3. Sharing Your Information</h3>
        <p className="text-muted-foreground mb-4">
          We may share your personal information with:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-4">
          <li>Service providers who perform services on our behalf.</li>
          <li>Law enforcement agencies when required by law.</li>
          <li>Business partners with your consent.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">4. Your Choices</h3>
        <p className="text-muted-foreground mb-4">
          You can manage your personal information and privacy preferences by:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-4">
          <li>Updating your account information.</li>
          <li>Adjusting your notification settings.</li>
          <li>Opting out of marketing communications.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyContent;
