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
        subtitle: " We may share your personal information with:",
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
];

export default privacyContent;
