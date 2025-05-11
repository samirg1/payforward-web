import Verifications from "@/data/information/verifications";
import Onboarding from "@/data/information/Onboarding";
import Security from "@/data/information/Security";

interface InformationSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

const sections: InformationSection[] = [
    {
        id: "verifications",
        title: "Verifications",
        content: <Verifications />,
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
];

export default sections;
