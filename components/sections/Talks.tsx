'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Video, ExternalLink, PlayCircle } from 'lucide-react'
import Link from 'next/link'

const upcomingTalks = [
  {
    title: 'Prompt Injection & Data Leakage',
    event: 'AI Horizons 2026',
    location: 'Dornacherstrasse 192, 4053 Basel',
    date: '27 November 2025',
    type: 'Conference',
    audience: 'iRIX customers, business leaders, developers, and anyone interested in AI security',
    description: 'How attacks on LLMs work and how to protect against them, featuring live demonstrations of prompt injection techniques.',
    topics: [
      'Direct prompt injection techniques and vulnerabilities',
      'Indirect prompt injection attack vectors',
      'How prompt injection works under the hood',
      'Data leakage risks in LLM applications',
      'Live demonstrations of real-world attacks',
      'Defense strategies and best practices'
    ],
    eventUrl: 'https://irix.ch/de/ai-horizons/',
    featured: true
  },
  {
    title: 'New Features in Java 2025',
    event: 'Internal Company Presentation - iRIX Software Engineering AG',
    location: 'Basel, Switzerland',
    date: 'TBA 2026',
    type: 'Internal Presentation',
    audience: 'Internal development team and BI professionals at iRIX',
    description: 'A comprehensive wrap-up of all new features and improvements introduced in Java 2025, with practical examples and guidance on how they can be applied in our development workflow.',
    topics: [
      'Comprehensive overview of all Java 2025 new features',
      'Language enhancements and syntax improvements',
      'Performance improvements and JVM optimizations',
      'New and updated APIs',
      'Practical examples relevant to iRIX projects',
      'Migration considerations and best practices',
      'How to leverage new features in our energy trading platforms'
    ],
    featured: true
  }
]

const pastTalks: any[] = []

export default function Talks() {
  return (
    <section className="relative py-24 overflow-hidden min-h-screen" style={{paddingLeft: '150px'}}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Talks & Presentations</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Sharing knowledge and insights with the developer community
          </p>
        </motion.div>

        {/* Upcoming Talks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Upcoming Talks</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingTalks.map((talk, index) => (
                <motion.div
                  key={talk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {talk.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {talk.title}
                  </h4>

                  <div className="flex flex-col gap-2 text-sm text-muted mb-4">
                    <p className="font-semibold text-foreground">{talk.event}</p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {talk.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {talk.location}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {talk.audience}
                    </span>
                  </div>

                  <p className="text-muted mb-4">{talk.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2">Topics Covered:</h5>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-muted">
                      {talk.topics.map(topic => (
                        <li key={topic} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    {talk.eventUrl && (
                      <Link
                        href={talk.eventUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Event Details</span>
                      </Link>
                    )}
                    {talk.videoUrl && (
                      <Link
                        href={talk.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                      >
                        <PlayCircle className="w-5 h-5" />
                        <span>Watch</span>
                      </Link>
                    )}
                    {talk.slidesUrl && (
                      <Link
                        href={talk.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Slides</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Past Talks */}
        {pastTalks.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Past Talks & Workshops</h3>
            <div className="space-y-4">
              {pastTalks.map((talk, index) => (
                <motion.div
                  key={talk.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.01] group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {talk.type}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {talk.title}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                        <span className="font-semibold text-foreground">{talk.event}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {talk.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {talk.location}
                        </span>
                      </div>

                      <p className="text-muted text-sm mb-3">{talk.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {talk.topics.map(topic => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-4">
                      {talk.eventUrl && (
                        <Link
                          href={talk.eventUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Event</span>
                        </Link>
                      )}
                      {talk.videoUrl && (
                        <Link
                          href={talk.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                        >
                          <PlayCircle className="w-5 h-5" />
                          <span>Watch</span>
                        </Link>
                      )}
                      {talk.slidesUrl && (
                        <Link
                          href={talk.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Slides</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Want me to speak at your event?</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              I'm always interested in speaking at conferences, meetups, and workshops.
              Topics I'm passionate about include clean code, Java development, microservices, and backend architecture.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
