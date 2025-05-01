import {
    CreditCard,
    DollarSign,
    HeartHandshake,
    Link,
    MapPinCheckInside,
    MessagesSquare,
    Search,
    Smartphone,
    TrendingUp,
    UserCheck,
    Wallet,
} from "lucide-react";

import deepLinkText from "@/lib/links/deepLinkText";
import linkText from "@/lib/links/linkText";
import replacePlaceholderWithLinks from "@/lib/links/replacePlaceholderWithLinks";

type Feature = {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
};

export const customerFeatures: Feature[] = [
    {
        icon: <MapPinCheckInside className="h-6 w-6" />,
        title: "Find Local Businesses",
        description: `Search by profession, location, rating. From handymen to hairdressers to bakers — we’ve got them all.`,
    },
    {
        icon: <CreditCard className="h-6 w-6" />,
        title: "Secure In-App Payments",
        description:
            "No cash, no stress. Pay safely and instantly through the app.",
    },
    {
        icon: <MessagesSquare className="h-6 w-6" />,
        title: "Chat with Providers",
        description:
            "Message businesses directly to ask questions, share details, or confirm a job before booking.",
    },
    {
        icon: <UserCheck className="h-6 w-6" />,
        title: "Verified & Reviewed",
        description:
            "Every provider is verified, reviewed, and rated by the community — so you always know who you’re hiring.",
    },
    {
        icon: <DollarSign className="h-6 w-6" />,
        title: "Free to Use - Always",
        description: `No fees for customers, ever. We also ensure you don't cop the businesses' transaction fees. See ${linkText("Terms of Service", "/legal#terms")}.`,
    },
].map((feature) => ({
    ...feature,
    description: replacePlaceholderWithLinks(feature.description),
}));

export const businessFeatures: Feature[] = [
    {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Pay as You Earn Only",
        description: `Setup and maintenance of your account are always free. We only charge a small fee when you get paid. See ${linkText("Pricing", "/docs#pricing")}.`,
    },
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
        icon: <HeartHandshake className="h-6 w-6" />,
        title: "We Work With You",
        description:
            "We’re here to help you grow your business. We're always transparent, and our goal is to help you succeed.",
    },
].map((feature) => ({
    ...feature,
    description: replacePlaceholderWithLinks(feature.description),
}));
