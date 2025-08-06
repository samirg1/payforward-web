import FadeIn from "../FadeIn";
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Crosshair,
    FileSearch,
    Handshake,
    Megaphone,
    MessageCircle,
    Repeat,
    Search,
    Waypoints,
} from "lucide-react";

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="w-full max-w-6xl mx-auto px-4 py-16"
        >
            <FadeIn duration={50}>
                <h2 className="text-4xl font-bold text-center mb-14">
                    How It Works
                </h2>
            </FadeIn>

            <FadeIn
                duration={50}
                className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
            >
                {/* Customers */}
                <FadeIn
                    duration={100}
                    className="group bg-muted rounded-2xl p-6 shadow-md transition hover:shadow-xl hover:bg-muted/80"
                >
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
                        <li className="flex items-center gap-3">
                            <Handshake className="w-5 h-5 text-primary" />
                            Promote their own business / side hustle
                        </li>
                    </ul>
                </FadeIn>

                {/* Platform */}
                <FadeIn
                    duration={150}
                    className="flex flex-row md:flex-col items-center text-center justify-center md:gap-12"
                >
                    <FadeIn
                        duration={200}
                        className="absolute md:w-[350px] w-[325px] h-[200px]"
                    >
                        <svg
                            viewBox="0 0 350 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    id="movingGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0%"
                                        stop-color="#27489d"
                                        stop-opacity="0.1"
                                    />
                                    <stop
                                        offset="50%"
                                        stop-color="#27489d"
                                        stop-opacity="1"
                                    />
                                    <stop
                                        offset="100%"
                                        stop-color="#27489d"
                                        stop-opacity="0.1"
                                    />
                                    <animateTransform
                                        attributeName="gradientTransform"
                                        type="rotate"
                                        from="0 175 100"
                                        to="360 175 100"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </linearGradient>
                            </defs>

                            <rect
                                x="25"
                                y="25"
                                width="300"
                                height="150"
                                rx="25"
                                ry="25"
                                fill="none"
                                stroke-width={10}
                                stroke="url(#movingGradient)"
                            />
                        </svg>
                    </FadeIn>

                    {/* Top arrow (mobile) */}
                    <ArrowUp className="w-6 h-6 text-primary md:hidden" />

                    {/* Left arrow (desktop) */}
                    <ArrowRight className="w-6 h-6 text-primary hidden md:block" />

                    {/* Platform card */}
                    <FadeIn
                        duration={200}
                        className="px-6 py-4 transition-all hover:scale-105"
                    >
                        <p className="text-lg font-semibold text-primary mb-1">
                            PayForward
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Smart matching, notifications, marketplace
                        </p>
                    </FadeIn>

                    {/* Bottom arrow (mobile) */}
                    <ArrowDown className="w-6 h-6 text-primary md:hidden" />

                    {/* Right arrow (desktop) */}
                    <ArrowLeft className="w-6 h-6 text-primary hidden md:block" />
                </FadeIn>

                {/* Businesses */}
                <FadeIn
                    duration={100}
                    className="group bg-muted rounded-2xl p-6 shadow-md transition hover:shadow-xl hover:bg-muted/80"
                >
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
                        <li className="flex items-center gap-3">
                            <Waypoints className="w-5 h-5 text-primary" />
                            Connect with their local community
                        </li>
                    </ul>
                </FadeIn>
            </FadeIn>

            {/* Loop footer */}
            <FadeIn
                duration={200}
                className="flex justify-center mt-14 text-muted-foreground items-center gap-2 text-sm"
            >
                <Repeat className="w-4 h-4 text-muted-foreground" />A continuous
                loop of opportunities on both sides
            </FadeIn>
        </section>
    );
};

export default HowItWorks;
