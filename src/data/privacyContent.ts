type PrivacyContentPiece = {
    title: string;
    subtitle: string;
    listContent: string[];
};

const privacyContent: PrivacyContentPiece[] = [
    {
        title: "Information We Collect",
        subtitle:
            "We collect several types of information from and about users of our services, including:",
        listContent: [
            "Personal information such as name and email address.",
            "Basic information you provide about your business (name, industry type etc.).",
            "Usage data about how you interact with our services.",
            "Device information including IP address, browser type, and operating system.",
        ],
    },
    {
        title: "How We Use Your Information",
        subtitle: "We use the information we collect to:",
        listContent: [
            "Provide, maintain, and improve our services.",
            "Process transactions and send transaction notifications.",
            "Respond to your comments, questions, and requests.",
            "Monitor and analyse trends, usage, and activities in connection with our services.",
        ],
    },
    {
        title: "Sharing Your Information",
        subtitle: "We may share your personal information with:",
        listContent: [
            "Service providers who perform services on our behalf.",
            "Law enforcement agencies when required by law.",
            "Business partners with your consent.",
        ],
    },
    {
        title: "Your Choices",
        subtitle:
            " You can manage your personal information and privacy preferences by:",
        listContent: [
            "Updating your account information.",
            "Adjusting your notification settings.",
        ],
    },
    {
        title: "Signing Up through Instagram",
        subtitle:
            "We offer the option to sign up with Instagram to make onboarding faster for businesses that already have an Instagram presence.\
            To use this option, your Instagram account must be a public Business or Creator account. We only access your Instagram data after you provide explicit consent.\
        When you choose to connect your Instagram account:\
            We temporarily retrieve certain public information from your profile to pre-fill your PayForward account.\
            This information is not stored until you complete the signup process.\
            We limit all requests in accordance with Instagram’s policies to prevent misuse and respect rate limits.\
        By using this feature, you authorise PayForward to access and use this information solely for the purpose of creating your account.\
            If you proceed with signup using your Instagram information, we may collect the following public details:",
        listContent: [
            "Username",
            "Name",
            "Profile picture URL (note: we do not store or host the actual image)",
            "Bio",
            "Email (if publicly listed)",
            "Phone number (if publicly listed)",
        ],
    },
];

export default privacyContent;
