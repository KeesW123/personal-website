import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconX } from "../ui/icons";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Over Mij", href: "#" },
    { name: "Projecten", href: "#" },
    { name: "Contact", href: "#" },
];

interface NavigationProps {
    lightsOn: boolean;
}

export const Navigation = ({ lightsOn }: NavigationProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 flex items-center justify-between p-6 md:px-12 md:py-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: lightsOn ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="cursor-pointer text-3xl font-bold tracking-tighter"
            >
                KW
                <span className="text-3xl text-(--arcady-green) drop-shadow-sm">.</span>
            </motion.div>
            <div className="hidden items-center gap-10 md:flex">
                {navItems.map((item, i) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: lightsOn ? 1 : 0, y: 0 }}
                        transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                        className="group relative text-sm font-medium text-neutral-400 transition-colors hover:text-(--arcady-green)"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-(--arcady-green) transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                ))}
            </div>
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-neutral-200 transition-colors hover:text-(--arcady-green)"
                >
                    {isMenuOpen ? <IconX /> : <IconMenu />}
                </button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-neutral-950/90 md:hidden"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="text-3xl font-light tracking-wide text-neutral-200 transition-colors hover:text-(--arcady-green)"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
