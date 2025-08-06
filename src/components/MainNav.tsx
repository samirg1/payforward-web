import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/components/Logo";
import ComingSoonBanner from "@/components/home/ComingSoonBanner";
import { Button } from "@/components/ui/button";

import useShowBannerStore from "@/state/useShowBannerStore";
import useShowDownloadStore from "@/state/useShowDownloadStore";

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showDownload = useShowDownloadStore((state) => state.show);

    const showBanner = useShowBannerStore((state) => state.showBanner);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs" },
        { label: "FAQ", href: "/faq" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed w-full bg-background backdrop-blur-sm z-50 border-b">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="flex items-center space-x-2">
                    <Logo className="h-8" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button onClick={showDownload}>Download App</Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-background border-b">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="text-sm font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button className="w-full" onClick={showDownload}>
                                Download App
                            </Button>
                        </nav>
                    </div>
                </div>
            )}

            {/* Coming Soon Banner - Moved to bottom of header */}
            {showBanner && <ComingSoonBanner />}
        </header>
    );
};

export default MainNav;
