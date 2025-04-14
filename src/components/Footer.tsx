import React, { useState } from "react";
import { Link } from "react-router-dom";

import DownloadDialog from "@/components/DownloadDialog";
import Logo from "@/components/Logo";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showDownloadDialog, setShowDownloadDialog] = useState(false);

    const handleDownloadClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowDownloadDialog(true);
    };

    const sections = [
        {
            title: "Product",
            links: [
                { label: "Download", href: "#", onClick: handleDownloadClick },
                { label: "Pricing", href: "/docs#pricing" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Documentation", href: "/docs" },
                { label: "FAQs", href: "/faq" },
                { label: "Guides", href: "/docs/" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
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
                                                href={link.href}
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
                            to="/legal#terms"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Terms
                        </Link>
                        <Link
                            to="/legal#privacy"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/legal#cookies"
                            className="text-muted-foreground hover:text-primary"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>

            {/* Download Dialog */}
            <DownloadDialog
                open={showDownloadDialog}
                onOpenChange={setShowDownloadDialog}
            />
        </footer>
    );
};

export default Footer;
