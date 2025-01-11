'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ReactNode } from 'react'

interface SectionTransitionProps {
  children: ReactNode
}

const SectionTransition = ({ children }: SectionTransitionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default SectionTransition

