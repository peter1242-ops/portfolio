"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export function Section({ children, id, className, delay = 0, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>
        </section>
    );
}
