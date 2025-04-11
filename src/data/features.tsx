import {
    CheckCircle2,
    Clock,
    CreditCard,
    Link,
    MapPinCheckInside,
    MessagesSquare,
    Search,
    Smartphone,
    Sparkles,
    TrendingUp,
    Wallet,
} from "lucide-react";

type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export const customerFeatures: Feature[] = [
    {
        icon: <MapPinCheckInside className="h-6 w-6" />,
        title: "Find Local Businesses",
        description:
            "Search by profession, location, rating. From handymen to hairdressers to bakers — we’ve got them all.",
    },
    {
        icon: <CreditCard className="h-6 w-6" />,
        title: "Secure In-App Payments",
        description:
            "No cash, no stress. Pay safely and instantly through the app when the job’s done.",
    },
    {
        icon: <MessagesSquare className="h-6 w-6" />,
        title: "Chat with Providers",
        description:
            "Message businesses directly to ask questions, share details, or confirm a job before booking.",
    },
    {
        icon: <Sparkles className="h-6 w-6" />,
        title: "Verified & Reviewed",
        description:
            "Every provider is reviewed and rated by the community — so you always know who you’re hiring.",
    },
];

export const businessFeatures: Feature[] = [
    {
        icon: <Smartphone className="h-6 w-6" />,
        title: "All-in-One App",
        description:
            "Manage bookings, payments, and chats in one place — no website or third-party tools needed.",
    },
    {
        icon: <Search className="h-6 w-6" />,
        title: "Discover New Customers",
        description:
            "Search for nearby service requests or get booked directly by people in your area.",
    },
    {
        icon: <Wallet className="h-6 w-6" />,
        title: "Payments First",
        description:
            "Get paid before you start the job. No more chasing payments or waiting for checks.",
    },
    {
        icon: <Link className="h-6 w-6" />,
        title: "Direct Customer Connections",
        description:
            "Message clients, send updates, and build lasting relationships — all through the app.",
    },
    {
        icon: <Clock className="h-6 w-6" />,
        title: "Work on Your Schedule",
        description:
            "Set your availability, accept jobs when you want, and stay in control of your time.",
    },
    {
        icon: <CheckCircle2 className="h-6 w-6" />,
        title: "No Setup Required",
        description:
            "Skip the website, payment system, and calendar setup. Just download and start working.",
    },
];
