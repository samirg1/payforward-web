import Verifications from "@/data/information/Verifications";
import Onboarding from "@/data/information/Onboarding";
import Security from "@/data/information/Security";
import Listings from "@/data/information/Listings";
import Ratings from "@/data/information/Ratings";
import Payments from "@/data/information/Payments";

interface InformationSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

const sections: InformationSection[] = [
    {
        id: "payments",
        title: "Payments",
        content: <Payments />,
    },
    {
        id: "onboarding",
        title: "Onboarding",
        content: <Onboarding />,
    },
    {
        id: "security",
        title: "Security",
        content: <Security />,
    },
    {
        id: "listings",
        title: "Listings",
        content: <Listings />,
    },
    {
        id: "ratings",
        title: "Ratings",
        content: <Ratings />,
    },
    {
        id: "verifications",
        title: "Verifications",
        content: <Verifications />,
    },
];

export default sections;
