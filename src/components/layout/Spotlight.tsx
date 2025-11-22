import { useEffect, useState } from "react";

interface SpotlightProps {
    enabled: boolean;
}

export const Spotlight = ({ enabled }: SpotlightProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-10 hidden transition-opacity duration-1000 md:block"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 180, 0, 0.06), transparent 40%)`,
                opacity: enabled ? 1 : 0,
            }}
        />
    );
};
