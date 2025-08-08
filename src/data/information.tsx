import Listings from "@/data/information/Listings";
import Onboarding from "@/data/information/Onboarding";
import Payments from "@/data/information/Payments";
import Ratings from "@/data/information/Ratings";
import Search from "@/data/information/Search";
import Security from "@/data/information/Security";
import Verifications from "@/data/information/Verifications";

interface InformationSection {
    id: string;
    title: string;
    content: () => React.ReactNode;
}

const sections: InformationSection[] = [
    {
        id: "payments",
        title: "Payments",
        content: () => <Payments />,
    },
    {
        id: "onboarding",
        title: "Onboarding",
        content: () => <Onboarding />,
    },
    {
        id: "security",
        title: "Security",
        content: () => <Security />,
    },
    {
        id: "listings",
        title: "Listings",
        content: () => <Listings />,
    },
    {
        id: "ratings",
        title: "Ratings",
        content: () => <Ratings />,
    },
    {
        id: "search",
        title: "Search",
        content: () => <Search />,
    },
    {
        id: "verifications",
        title: "Verifications",
        content: () => <Verifications />,
    },
];

export default sections;
