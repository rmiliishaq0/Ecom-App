"use client"

import { motion } from "framer-motion";

export default function OpacityAnimation({ children }: { children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.45 ,ease:"easeOut"}} viewport={{ once: true }}>
            {children}
        </motion.div>
    )
}