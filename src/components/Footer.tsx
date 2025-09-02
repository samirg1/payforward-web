import { Link } from "react-router-dom";

import Logo from "@/components/Logo";

import { SOCIAL_LINKS_MAPPINGS } from "@/data/constants";

import useShowDownloadStore from "@/state/useShowDownloadStore";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const showDownload = useShowDownloadStore((state) => state.show);

    const sections: {
        title: string;
        links: { label: string; href: ALL_ROUTES; onClick?: () => void }[];
    }[] = [
        {
            title: "Product",
            links: [
                { label: "Download", href: "/", onClick: showDownload },
                { label: "Pricing", href: "/docs/pricing" },
                { label: "Join Waitlist", href: "/join-waitlist" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "All Documentation", href: "/docs" },
                { label: "Tutorials", href: "/docs/tutorials" },
                { label: "Quick Start", href: "/docs/quick-start" },
                { label: "Payments", href: "/docs/information/payments" },
                { label: "Onboarding", href: "/docs/information/onboarding" },
                { label: "Security", href: "/docs/information/security" },
                {
                    label: "Verifications",
                    href: "/docs/information/verifications",
                },
                { label: "FAQs", href: "/faq" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Legal", href: "/legal" },
            ],
        },
    ];

    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center mb-4">
                            <Logo className="h-8" />
                        </Link>
                        <p className="text-muted-foreground mb-4 max-w-xs">
                            Empowering businesses. Connecting communities.
                        </p>
                        <div className="flex space-x-6">
                            {Object.entries(SOCIAL_LINKS_MAPPINGS).map(
                                ([key, { url, Icon }]) => {
                                    if (!url) return null;
                                    return (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon className="w-[24px] h-[24px]" />
                                        </a>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-medium text-sm mb-3">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        {link.onClick ? (
                                            <a
                                                onClick={link.onClick}
                                                className="text-muted-foreground hover:text-primary text-sm cursor-pointer"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="text-muted-foreground hover:text-primary text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} PayForward. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Link
                            to="/legal/terms"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Terms
                        </Link>
                        <Link
                            to="/legal/privacy"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/legal/cookies"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
