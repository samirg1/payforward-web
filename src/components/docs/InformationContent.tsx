import FadeIn from "../FadeIn";
import { Separator } from "../ui/separator";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import information from "@/data/information";

const InformationContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [activeSectionId, setActiveSectionId] = useState<string>(
        information[0]?.id || "",
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Support for deep linking
    useEffect(() => {
        const hash = location.hash.substring(1);
        if (!hash.startsWith("information-")) return;
        const sectionId = hash.replace("information-", "");
        const exists = information.some((s) => s.id === sectionId);
        if (exists) {
            setActiveSectionId(sectionId);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]);

    const handleSectionClick = (id: string) => {
        setActiveSectionId(id);
        navigate(`#information-${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const activeSection = information.find((s) => s.id === activeSectionId);

    return (
        <div className="flex flex-col md:flex-row md:items-start gap-8 mt-12">
            {/* Sticky Sidebar */}
            <FadeIn duration={100}>
                <aside className="w-full md:w-64 shrink-0 pr-4 md:sticky md:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
                    <div className="flex items-center justify-between mb-4 mr-4">
                        <h3 className="text-xl font-medium inline md:block">
                            Sections
                        </h3>
                        <button
                            className="md:hidden inline"
                            onClick={() => setIsMenuOpen((p) => !p)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    <Separator className="mb-4" />
                    <nav className="space-y-2 hidden md:block">
                        {information.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleSectionClick(section.id)}
                                className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                                    activeSectionId === section.id
                                        ? "bg-primary/10 font-semibold"
                                        : "hover:bg-muted"
                                }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </aside>
                {isMenuOpen && (
                    <div className="md:hidden bg-background border-b">
                        <div className="container mx-auto px-4 py-3">
                            <nav className="flex flex-col space-y-4">
                                {information.map((section) => (
                                    <Link
                                        key={section.id}
                                        to={`#information-${section.id}`}
                                        className={`text-sm font-medium p-2 hover:text-primary transition-colors rounded-lg ${
                                            activeSectionId === section.id
                                                ? "bg-primary/10 font-semibold"
                                                : "hover:bg-muted"
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {section.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </FadeIn>

            {/* Content */}
            <section className="flex-1">
                <FadeIn key={activeSectionId} duration={200}>
                    {activeSection ? (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                {activeSection.title}
                            </h2>
                            <div className="text-muted-foreground">
                                {activeSection.content}
                            </div>
                        </div>
                    ) : (
                        <div className="text-muted-foreground">
                            No information available.
                        </div>
                    )}
                </FadeIn>
            </section>
        </div>
    );
};

export default InformationContent;
