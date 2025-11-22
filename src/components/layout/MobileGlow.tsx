export const MobileGlow = () => (
    <div className="pointer-events-none absolute inset-0 z-10 block overflow-hidden md:hidden">
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[var(--arcady-green)/15] blur-[80px]"></div>
    </div>
);
