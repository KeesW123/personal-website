import { motion } from "framer-motion";
import { IconArrowRight } from "../ui/icons";

export const Hero = ({ lightsOn }: { lightsOn: boolean }) => (
    <main className="relative z-20 mt-[-50px] flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <motion.h1
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{
                opacity: lightsOn ? 1 : [0, 0.2, 0, 0.5, 0.2, 1],
                filter: lightsOn ? "blur(0px)" : "blur(12px)",
                textShadow: lightsOn ? "0 0 30px rgba(245, 158, 11, 0.3)" : "none",
            }}
            transition={{
                duration: 1.8,
                ease: "easeInOut",
                times: [0, 0.1, 0.3, 0.4, 0.5, 1],
            }}
            className="font-display mb-6 text-4xl font-extrabold tracking-tight text-neutral-100 md:text-7xl"
        >
            Kees Wijenberg
        </motion.h1>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: lightsOn ? 1 : 0 }}
            transition={{ delay: 2.0, duration: 1 }}
            className="flex flex-col items-center gap-2"
        >
            <p className="text-lg font-light text-neutral-400 md:text-2xl">
                Full Stack Developer
                <span className="mx-2">
                    <strong>@</strong>
                </span>
                <a href="https://arcady.nl" className="text-(--arcady-green)">
                    Arcady
                </a>
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: lightsOn ? 1 : 0, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-12"
        >
            <button className="group relative cursor-pointer overflow-hidden rounded-full border border-neutral-700 bg-transparent px-8 py-3 text-neutral-300 transition-all duration-300 hover:border-[var(--arcady-green)/50] hover:text-(--arcady-green)">
                <div className="absolute inset-0 w-0 bg-[var(--arcady-green)/10] transition-all duration-250 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2 font-medium">
                    Bekijk Projecten{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                        <IconArrowRight />
                    </span>
                </span>
            </button>
        </motion.div>
    </main>
);
