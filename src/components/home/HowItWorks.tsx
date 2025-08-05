import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Crosshair,
    FileSearch,
    Megaphone,
    MessageCircle,
    Repeat,
    Search,
} from "lucide-react";

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="w-full max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-14">
                How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* Customers */}
                <div className="group bg-muted rounded-2xl p-6 shadow-md transition hover:shadow-xl hover:bg-muted/80">
                    <h3 className="text-2xl font-semibold mb-6 text-primary">
                        Customers
                    </h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <Search className="w-5 h-5 text-primary" />
                            Search for businesses
                        </li>
                        <li className="flex items-center gap-3">
                            <Megaphone className="w-5 h-5 text-primary" />
                            Post a job or listing
                        </li>
                        <li className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 text-primary" />
                            Chat & hire directly
                        </li>
                    </ul>
                </div>

                {/* Platform */}
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Top arrow (mobile) */}
                    <ArrowUp className="w-6 h-6 text-primary block md:hidden" />

                    {/* Left arrow (desktop) */}
                    <ArrowRight className="w-6 h-6 text-primary hidden md:block" />

                    {/* Platform card */}
                    <div className="bg-primary/10 rounded-xl px-6 py-4 shadow-inner transition-all hover:scale-105">
                        <p className="text-lg font-semibold text-primary mb-1">
                            PayForward
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Smart matching, notifications, discovery
                        </p>
                    </div>

                    {/* Bottom arrow (mobile) */}
                    <ArrowDown className="w-6 h-6 text-primary block md:hidden" />

                    {/* Right arrow (desktop) */}
                    <ArrowLeft className="w-6 h-6 text-primary hidden md:block" />
                </div>

                {/* Businesses */}
                <div className="group bg-muted rounded-2xl p-6 shadow-md transition hover:shadow-xl hover:bg-muted/80">
                    <h3 className="text-2xl font-semibold mb-6 text-primary">
                        Businesses
                    </h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <Crosshair className="w-5 h-5 text-primary" />
                            Show up in search results
                        </li>
                        <li className="flex items-center gap-3">
                            <FileSearch className="w-5 h-5 text-primary" />
                            Browse customer listings
                        </li>
                        <li className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 text-primary" />
                            Message & win jobs
                        </li>
                    </ul>
                </div>
            </div>

            {/* Loop footer */}
            <div className="flex justify-center mt-14 text-muted-foreground">
                <div className="flex items-center gap-2 text-sm">
                    <Repeat className="w-4 h-4 text-muted-foreground" />A
                    continuous loop of opportunities on both sides
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
