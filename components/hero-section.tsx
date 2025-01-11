'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react'

// const useTypewriter = (text: string, speed = 100) => {
//   const [displayText, setDisplayText] = useState("")
  
//   useEffect(() => {
//     let i = 0
//     const timer = setInterval(() => {
//       if (i < text.length) {
//         setDisplayText((prev) => prev + text.charAt(i))
//         i++
//       } else {
//         clearInterval(timer)
//       }
//     }, speed)

//     return () => clearInterval(timer)
//   }, [text, speed])

//   return displayText
// }

// const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
//   const displayText = useTypewriter(text, speed)
//   return <span>{displayText}</span>
// }

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    "Full-Stack Developer", 
    "Problem Solver", 
    "Tech Enthusiast",
    "Creative Coder",
    "UI/UX Enthusiast"
  ]

  const rotateRole = useCallback(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length)
  }, [roles.length])

  useEffect(() => {
    const interval = setInterval(rotateRole, 3000)
    return () => clearInterval(interval)
  }, [rotateRole])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/01.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/90" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary/30 opacity-75 blur"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <h1 className="relative bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl md:text-8xl">
                Bittu Singh
              </h1>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="h-8 mb-8"
            >
              <p className="text-2xl text-muted-foreground">
                {roles[currentRole]}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="default"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300"
            onClick={() => window.open("mailto:bittusinghh2002@gmail.com")}
          >
            <div className="relative z-10 flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </div>
            <motion.span
              className="absolute inset-0 z-0 bg-primary/20"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>

          <div className="flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/BittuSingh147", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/bittusingh14/", label: "LinkedIn" },
              { Icon: Twitter, href: "https://x.com/BittuSi56134973", label: "Twitter" }
            ].map(({ Icon, href, label }, index) => (
              <motion.div
                key={href}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="relative overflow-hidden hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open(href)}
                >
                  <div className="relative z-10">
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <motion.span
                    className="absolute inset-0 z-0 bg-primary/10"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

