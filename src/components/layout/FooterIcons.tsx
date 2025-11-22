import { motion } from "framer-motion";
import { IconGithub, IconLinkedin, IconMail } from "../ui/icons";

export const FooterIcons = ({ lightsOn }: { lightsOn: boolean }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: lightsOn ? 1 : 0 }}
        transition={{ delay: 3 }}
        className="absolute right-0 bottom-8 left-0 flex justify-center gap-6 text-neutral-500"
    >
        <div className="cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-(--arcady-green)">
            <a href="https://github.com/KeesW123">
                <IconGithub />
            </a>
        </div>
        <div className="cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-(--arcady-green)">
            <a href="https://www.linkedin.com/in/kees-wijenberg-485787267/">
                <IconLinkedin />
            </a>
        </div>
        <div className="cursor-pointer transition-colors duration-200 hover:scale-110 hover:text-(--arcady-green)">
            <a href="mailto:k.wijenberg@arcady.nl">
                <IconMail />
            </a>
        </div>
    </motion.div>
);
