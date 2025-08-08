import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/components/Logo";
import ComingSoonBanner from "@/components/home/ComingSoonBanner";
import { Button } from "@/components/ui/button";

import { NAV_ITEMS } from "@/data/constants";

import useCurrentPageStore from "@/state/useCurrentPageStore";
import useShowBannerStore from "@/state/useShowBannerStore";
import useShowDownloadStore from "@/state/useShowDownloadStore";

const NavLink = ({
    label,
    href,
    isActive,
}: {
    label: string;
    href: string;
    isActive: boolean;
}) => (
    <Link to={href}>
        <Button
            variant={isActive ? "default" : "link"}
            className={`font-medium transition-colors
                hover:bg-primary
                hover:text-white
             ${isActive ? "bg-muted-foreground text-white" : "text-muted-foreground"}
             border-muted-foreground p-2 rounded-md`}
        >
            {label}
        </Button>
    </Link>
);

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showDownload = useShowDownloadStore((state) => state.show);
    const showBanner = useShowBannerStore((state) => state.showBanner);
    const currentPage = useCurrentPageStore((state) => state.currentPage);

    return (
        <header className="fixed w-full bg-background backdrop-blur-sm z-50 border-b">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <Link to="/" className="flex items-center space-x-2">
                    <Logo className="h-8" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            isActive={currentPage === item.label}
                        />
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
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.label}
                                    label={item.label}
                                    href={item.href}
                                    isActive={currentPage === item.label}
                                />
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
