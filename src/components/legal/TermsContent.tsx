
import { Separator } from "@/components/ui/separator";

const TermsContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <p className="text-muted-foreground mb-4">
          Last updated: April 11, 2025
        </p>
        <p className="text-muted-foreground mb-4">
          Welcome to PayForward. By accessing or using our services, you agree to be bound by these Terms of Service.
        </p>
      </div>

      <Separator />

      <div>
        <h3 className="text-xl font-bold mb-3">1. Acceptance of Terms</h3>
        <p className="text-muted-foreground mb-4">
          By accessing or using PayForward's services, including our website and mobile application, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">2. Use of Service</h3>
        <p className="text-muted-foreground mb-4">
          You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground mb-4">
          <li>In any way that violates any applicable laws or regulations.</li>
          <li>To engage in any activity that interferes with or disrupts our services.</li>
          <li>To attempt to gain unauthorized access to any part of our services.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">3. User Accounts</h3>
        <p className="text-muted-foreground mb-4">
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3">4. Changes to Terms</h3>
        <p className="text-muted-foreground mb-4">
          We reserve the right to modify these terms at any time. We will provide notice of any significant changes by updating the "Last updated" date at the top of these Terms and by placing a notice on our site.
        </p>
      </div>
    </div>
  );
};

export default TermsContent;
