'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient - minimalist and subtle */}
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/28 via-background to-background" />

      {/* Minimalist background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.p
            className="text-primary font-bold mb-3 text-3xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Yannick Zutter
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted mb-42"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer | Clean Code Advocate | Java Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted max-w-3xl mb-16 leading-relaxed pt-123"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm a software developer specializing in <span className="text-foreground font-semibold">backend development with Java</span> and clean code practices,
            focusing on refactoring, maintainability, and delivering robust solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#projects"
              className="py-5 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-center"
              style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '5px', paddingBottom: '5px' }}
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all hover:scale-105 text-center"
              style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '5px', paddingBottom: '5px' }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
