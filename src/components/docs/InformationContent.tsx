import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



import information from "@/data/information";





const InformationContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [activeSectionId, setActiveSectionId] = useState<string>(
        information[0]?.id || "",
    );

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
        <div className="flex flex-col md:flex-row md:items-start gap-8">
    {/* Sticky Sidebar */}
    <aside className="w-full md:w-64 shrink-0 pr-4 md:sticky md:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <h3 className="text-xl font-medium mb-4">Sections</h3>
        <nav className="space-y-2">
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

    {/* Content */}
    <section className="flex-1">
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
    </section>
</div>

    );
};

export default InformationContent;
