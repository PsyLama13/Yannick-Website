'use client'

import { motion } from 'framer-motion'
import { Code2, Database, GitBranch, Lightbulb } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Backend Development',
    description: 'Expert in Java with 4 years university + 4 years professional daily use, building scalable enterprise applications',
    color: 'text-blue-500'
  },
  {
    icon: Database,
    title: 'Legacy System Modernization',
    description: 'Leading maintenance and modernization of 12-year-old platforms while delivering new features',
    color: 'text-green-500'
  },
  {
    icon: GitBranch,
    title: 'Clean Code & Refactoring',
    description: 'Passionate about code quality, introduced Sonar and comprehensive testing practices',
    color: 'text-purple-500'
  },
  {
    icon: Lightbulb,
    title: 'Energy Trading Systems',
    description: 'Specialized in mission-critical trading platforms for European energy markets',
    color: 'text-yellow-500'
  }
]

const technologies = [
  'Java', 'Spring Boot', 'Hibernate', 'JBoss', 'JUnit',
  'C#', '.NET Framework', 'Git', 'Docker',
  'Sonar'
]

const hobbies = [
  {
    title: 'Medieval Stage Combat',
    description: 'Practicing choreographed stage combat with various weapons, combining physical discipline with performance artistry'
  },
  {
    title: 'Music',
    description: 'Playing guitar, expressing creativity through music as a balance to technical work'
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden min-h-screen" style={{paddingLeft: '150px'}}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A passionate software developer dedicated to crafting clean, efficient, and maintainable code
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <p className="text-lg leading-relaxed text-muted mb-6">
            I'm a full-stack developer based in <span className="text-foreground font-semibold">Bubendorf, Switzerland</span>, with a strong focus on backend development using Java.
            My passion lies in building scalable, maintainable applications that solve real-world problems while adhering to clean code principles.
            I value refactoring, maintainability, and taking responsibility for the solutions I create.
          </p>
          <p className="text-lg leading-relaxed text-muted mb-6">
            Since 2021, I've been working at <span className="text-foreground font-semibold">iRIX Software Engineering AG</span>, where I lead the development and
            maintenance of critical energy trading platforms for Axpo Solutions AG. My work involves managing 12-year-old legacy systems while
            implementing modern features, ensuring high availability for mission-critical trading operations across multiple European energy markets.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            I hold a Bachelor of Science in Computer Science from the <span className="text-foreground font-semibold">University of Basel</span>, with a focus on
            Artificial Intelligence and Machine Learning. My bachelor thesis explored implementing and evaluating successor generators in the
            Fast Downward Planning System.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:scale-105"
            >
              <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-muted">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Beyond Code</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10"
              >
                <h4 className="text-xl font-bold mb-2">{hobby.title}</h4>
                <p className="text-muted">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
