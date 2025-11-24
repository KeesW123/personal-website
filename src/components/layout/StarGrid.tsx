import React, { useEffect, useMemo, useState } from "react";

interface Star {
    relX: number;
    relY: number;
    scale: number;
    opacity: number;
    color: string;
}

function createStars(count: number): Star[] {
    return Array.from({ length: count }, () => ({
        relX: Math.random(),
        relY: Math.random(),
        scale: Math.random() * 0.5,
        opacity: Math.random() * 1.5,
        color: "white",
    }));
}

export const StarGrid: React.FC = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const stars = useMemo(() => createStars(100), []);

    return (
        <div className="pointer-events-none absolute inset-0">
            <svg width={size.width} height={size.height} className="absolute inset-0 h-full w-full">
                {stars.map((star, i) => (
                    <circle
                        key={i}
                        cx={star.relX * size.width}
                        cy={star.relY * size.height}
                        r={star.scale * 2}
                        fill={star.color}
                        opacity={star.opacity}
                    />
                ))}
            </svg>
        </div>
    );
};
