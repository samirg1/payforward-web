import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    duration?: number; // Duration in milliseconds
    className?: string;
}

export default function FadeIn({ children, duration, className }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, duration);
                }
            },
            {
                threshold: 0.1,
            },
        );

        if (observerRef) {
            observer.observe(observerRef);
        }

        return () => {
            if (observerRef) {
                observer.unobserve(observerRef);
            }
        };
    }, [duration]);

    return (
        <div
            ref={ref}
            className={clsx(
                "transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                className,
            )}
        >
            {children}
        </div>
    );
}
