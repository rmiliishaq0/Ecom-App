"use client";

import { motion } from "motion/react"

export default function HeroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
    return(
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 ,ease:"easeInOut"}} className="z-10 flex flex-col items-center justify-center lg:py-20 md:py-16 py-10 relative">
        {children}
    </motion.div>
    )
}