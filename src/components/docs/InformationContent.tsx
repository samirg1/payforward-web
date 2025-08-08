import FadeIn from "../FadeIn";
import { Separator } from "../ui/separator";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useNavigate from "@/hooks/useNavigate";

import information from "@/data/information";

const InformationContent = () => {
    const navigate = useNavigate();
    const { subSection } = useParams<DOC_ROUTE_PARAMS<"information">>();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useMemo(() => {
        if (!subSection) return information[0];
        return information.find((section) => section.id === subSection);
    }, [subSection]);

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
                                onClick={() =>
                                    navigate(`/docs/information/${section.id}`)
                                }
                                className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                                    activeSection?.id === section.id
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
                                        to={`/docs/information/${section.id}`}
                                        className={`text-sm font-medium p-2 hover:text-primary transition-colors rounded-lg ${
                                            activeSection?.id === section.id
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
                <FadeIn key={activeSection?.id} duration={200}>
                    {activeSection ? (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                {activeSection.title}
                            </h2>
                            <div className="text-muted-foreground">
                                {activeSection.content()}
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
