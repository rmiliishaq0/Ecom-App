"use client"

import { motion } from "motion/react"

type Props = {
  children: React.ReactNode
  exit?: any
}

export function StaggerItem({ children ,...props}: Props) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
