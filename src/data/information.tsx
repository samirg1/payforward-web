import linkText from "@/lib/links/linkText";
import replacePlaceholdersWithLinks from "@/lib/links/replacePlaceholderWithLinks";

interface InformationSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

const verificationImageURL = "/information/verification-example.jpeg";

const sections: InformationSection[] = [
    {
        id: "verifications",
        title: "Verifications",
        content: (
            <div>
                <p className="mb-4">
                    Verifications are an important part of how we keep
                    interactions safe and secure, whilst ensuring that
                    businesses are legitimate and accounts represent who they
                    say they are.
                </p>
                <p>
                    The verifications are shown on any account page and look
                    like the below:
                </p>
                <div className="flex justify-center my-4">
                    <img
                        src={verificationImageURL}
                        alt="Verification Example"
                        className="rounded-lg"
                    />
                </div>
                <p>
                    The verification tick '✓' that is shown after 'BUSINESS'
                    confirms that the business has successfully onboarded onto
                    our platform, ensuring it is a legitimate and operational
                    entity. Only these businesses will show up in search results
                    and be able to send quotes and receive payments.
                    {/* Learn more about onboarding {replacePlaceholdersWithLinks(linkText("here.", "/docs#information-onboarding"))} */}
                </p>
                <br />
                <p>
                    The blue verification tick is reserved for notable
                    businesses or individuals, similar to the Instagram blue
                    tick. It signifies credibility and trust, and ensures that
                    the account is actually the notable business or individual
                    it claims to be. {<br />}
                    To receive this verification, accounts must apply (via
                    email) with proof of their identity and/or business. This is
                    a manual process and requires verification from our team.
                </p>
                <br />
                <p>
                    The green verification is awarded based on community
                    recognition. It represents a business that consistently goes
                    above and beyond, earning high praise and trust from
                    customers. {<br />}
                    This is a manual process and requires businesses to
                    consistently demonstrate exceptional service and
                    reliability. It is a mark of trust and excellence within the
                    community.
                </p>
            </div>
        ),
    },
];
//     {
//         id: "features",
//         title: "Key Features",
//         content: (
//             <div>
//                 <ul className="list-disc pl-5 space-y-2">
//                     <li>Cross-platform support for iOS and Android</li>
//                     <li>Real-time synchronization across multiple devices</li>
//                     <li>End-to-end encryption for all user data</li>
//                     <li>Intuitive user interface with customizable themes</li>
//                     <li>Offline functionality with automatic syncing</li>
//                     <li>Regular updates with new features and improvements</li>
//                 </ul>
//             </div>
//         ),
//     },
//     {
//         id: "requirements",
//         title: "System Requirements",
//         content: (
//             <div>
//                 <p className="mb-2 font-medium">iOS:</p>
//                 <ul className="list-disc pl-5 mb-4">
//                     <li>iOS 14.0 or later</li>
//                     <li>Compatible with iPhone, iPad, and iPod touch</li>
//                     <li>Requires at least 200MB of free storage space</li>
//                 </ul>

//                 <p className="mb-2 font-medium">Android:</p>
//                 <ul className="list-disc pl-5">
//                     <li>Android 8.0 (Oreo) or later</li>
//                     <li>Minimum 2GB RAM recommended</li>
//                     <li>Requires at least 150MB of free storage space</li>
//                 </ul>
//             </div>
//         ),
//     },
//     {
//         id: "privacy",
//         title: "Privacy & Security",
//         content: (
//             <div>
//                 <p className="mb-4">
//                     We take privacy and security seriously. Our application
//                     implements several measures to ensure your data remains
//                     safe:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-1">
//                     <li>End-to-end encryption for all communications</li>
//                     <li>
//                         Secure authentication options including biometric login
//                     </li>
//                     <li>
//                         No third-party tracking or analytics without explicit
//                         consent
//                     </li>
//                     <li>
//                         Option to completely delete your account and associated
//                         data
//                     </li>
//                     <li>Regular security audits and penetration testing</li>
//                 </ul>
//             </div>
//         ),
//     },
// ];

export default sections;
