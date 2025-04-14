type AboutUsSection = {
    id: string;
    title: string;
    content: string[];
};

const aboutUs: AboutUsSection[] = [
    {
        id: "about-us-our-story",
        title: "Our Story",
        content: [
            "PayForward was founded in 2024/25 with a simple mission: to make a marketplace for services that fosters community, connection, and trust. We saw a gap in the market for a platform that not only connects users with local businesses but also allows users to share their experiences and recommendations.",
            "Our journey began with two passionate individuals who believed in the power of community. We wanted to create a space where users could easily find and support local businesses, while also sharing their experiences with others.",
        ],
    },
    {
        id: "about-us-our-mission",
        title: "Our Mission",
        content: [
            "At PayForward, our mission is to empower users to discover and support local businesses while fostering a sense of community. We believe that by connecting users with local services, we can help strengthen the local economy and create a more vibrant community.",
            "We are committed to providing a platform that is user-friendly, secure, and transparent. Our goal is to make it easy for users to find the services they need while also ensuring that their data is protected and their experiences are valued.",
        ],
    },
    {
        id: "about-us-our-founders",
        title: "Our Founders",
        content: [
            "PayForward is co-founded by Nathan Xuereb and Samir Gupta, two individuals with a passion for technology and community building. With backgrounds in software development and business management, they combined their skills to create a platform that would revolutionise the way users connect with local services.",
            "Nathan and Samir are dedicated to ensuring that PayForward remains true to its mission of empowering users and supporting local businesses. They believe that by working together, we can create a better future for our communities.",
        ],
    },
];

export default aboutUs;
