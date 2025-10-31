'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'International Energy Trading Platform',
    description: 'Enterprise-level platform for international energy trading across multiple European energy trading platforms for Axpo Solutions AG. Facilitates real-time trading operations, market data integration, and transaction management at multiple European energy exchanges.',
    technologies: ['Java', 'JUnit', 'JBoss', 'Sonar', 'Hibernate', '.NET', 'C#', 'Git'],
    role: 'Lead Developer',
    team: '3 developers',
    duration: '2021 - Present',
    caseStudy: 'https://irix.ch/en/references/axpo-solutions-ag-optimised-electricity-trading/',
    featured: true
  },
  {
    title: 'Swiss Tertiary Energy Trading Platform',
    description: 'Specialized platform for automated bid placement in tertiary energy trading operations within Switzerland\'s energy market for Axpo Solutions AG. Automates bid submissions, market participation, and settlement processes for tertiary control energy.',
    technologies: ['Java', 'JUnit', 'JBoss', 'Sonar', 'Hibernate', '.NET', 'C#', 'Git'],
    role: 'Full Stack Developer',
    team: '5 developers',
    duration: '2021 - Present',
    caseStudy: 'https://irix.ch/de/referenzen/axpo-solutions-ag-applikation-zur-automatischen-platzierung-von-geboten/',
    featured: true
  },
  {
    title: 'Zoodle - Recipe & Meal Planning App',
    description: 'A cross-platform food application for recipe management and meal planning. Features recipe storage with images, advanced search, weekly meal planning, and offline mobile support with automatic synchronization.',
    technologies: ['Java 17', 'Spring Boot 3.2', 'PostgreSQL', 'React 18', 'TypeScript', 'React Native', 'Expo', 'Docker'],
    role: 'Solo Developer (AI-assisted)',
    duration: '2024 - Present',
    github: 'https://github.com/PsyLama13/Zoodle',
    featured: false
  },
  {
    title: 'Advent of Code Solutions',
    description: 'Collection of solutions for Advent of Code programming challenges, showcasing problem-solving skills and algorithmic thinking. Completed all 25 days (50 stars) in 2024.',
    technologies: ['Java'],
    role: 'Solo Developer',
    duration: '2023 - Present',
    github: 'https://github.com/PsyLama13/AoC',
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden min-h-screen" style={{paddingLeft: '150px'}}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/28 via-background to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A showcase of my work in backend development, clean code, and full-stack applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] group"
                >
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4 text-sm text-muted">
                    <p><span className="font-semibold text-foreground">Role:</span> {project.role}</p>
                    {project.team && <p><span className="font-semibold text-foreground">Team:</span> {project.team}</p>}
                    <p><span className="font-semibold text-foreground">Duration:</span> {project.duration}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </Link>
                    )}
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Case Study</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.02] group"
                >
                  <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-3 text-xs text-muted">
                    <p><span className="font-semibold text-foreground">Role:</span> {project.role}</p>
                    <p><span className="font-semibold text-foreground">Duration:</span> {project.duration}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Link>
                    )}
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Case Study</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
