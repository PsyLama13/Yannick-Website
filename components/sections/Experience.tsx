'use client'

import {motion} from 'framer-motion'
import {Calendar, MapPin} from 'lucide-react'

const timelineItems = [
    {
        title: 'Full Stack Software Developer (C#/Java)',
        organization: 'iRIX Software Engineering AG',
        location: 'Basel, Switzerland',
        period: '2021 - Present',
        type: 'Work Experience',
        description: 'Leading the development and maintenance of critical energy trading platforms for Axpo Solutions AG. Managing a 12-year-old Java platform while implementing extensive new functionality, ensuring stability, and guiding modernization efforts for mission-critical systems.',
        achievements: [
            'Stepped up as project lead after all senior developers left the project, taking full ownership as the junior developer',
            'Successfully maintained and enhanced two major enterprise energy trading platforms without business interruption',
            'Met all project deadlines and successfully launched products live with zero critical incidents',
            'Introduced code quality practices: Implemented Sonar for static code analysis, significantly improving maintainability',
            'Enhanced testing infrastructure: Introduced assertion tests and parameterized tests, increasing test coverage and reliability',
            'Led extensive refactoring efforts on legacy codebase while continuously delivering new features',
            'Implemented substantial new functionality into legacy systems, modernizing capabilities without compromising stability',
            'Ensured high availability for mission-critical trading operations across multiple European energy markets',
            'Guided modernization strategy for 12-year-old platform, balancing technical debt reduction with feature delivery'
        ],
        technologies: ['Java', 'JUnit', 'JBoss', 'Sonar', 'Hibernate', '.NET', 'C#', 'Git']
    },
    {
        title: 'Bachelor of Science in Computer Science',
        organization: 'University of Basel',
        location: 'Basel, Switzerland',
        period: '2017 - 2021',
        type: 'Education',
        description: 'Completed Bachelor of Science degree in Computer Science with a focus on Artificial Intelligence and Machine Learning.',
        details: [
            'Focus: Artificial Intelligence & Machine Learning',
            'Relevant coursework in algorithms, data structures, and software engineering',
            'Strong foundation in theoretical computer science and practical programming'
        ]
    },
    {
        title: 'Bachelor Thesis',
        organization: 'Artificial Intelligence Research Group, University of Basel',
        location: 'Basel, Switzerland',
        period: '2021',
        type: 'Research',
        description: 'Implementing and Evaluating Successor Generator in the Fast Downward Planning System',
        details: [
            'Research in AI planning and automated problem solving',
            'Implementation and evaluation of successor generation algorithms',
            'Contribution to the Fast Downward Planning System'
        ]
    }
]

export default function Experience() {
    return (
        <section className="relative py-24 overflow-hidden min-h-screen" style={{paddingLeft: '150px'}}>
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/33 via-background to-background"/>

            <div className="relative z-10 px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16 max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold" style={{marginBottom: '10px'}}>
                        Experience & Education</h2>
                    <p className="text-xl text-muted max-w-3xl mx-auto" style={{marginBottom: '20px'}}>
                        My professional and academic journey
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative" style={{marginLeft: '200px', minHeight: '100vh'}}>
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-0 w-0.5 bg-primary/20" style={{height: '100%', minHeight: '100vh'}}/>

                    {/* Timeline items */}
                    <div style={{paddingLeft: '75px', paddingRight: '200px'}}>
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="relative w-full"
                                style={{marginBottom: '50px'}}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="hidden md:block absolute top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                                    style={{left: '-62px'}}/>

                                {/* Content */}
                                <div
                                    className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-[500ms] overflow-hidden w-1/2 hover:w-full group"
                                    style={{padding: '10px'}}
                                >
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {item.type}
                      </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-lg text-primary font-semibold mb-2">{item.organization}</p>

                                        <div className="flex flex-wrap gap-3 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4"/>
                          {item.period}
                      </span>
                                            <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4"/>
                                                {item.location}
                      </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted mb-4">{item.description}</p>

                                    {/* Achievements or Details */}
                                    <div
                                        className="max-h-0 group-hover:max-h-[2000px] opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                        {item.achievements && (
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                                                <ul className="space-y-2 text-sm text-muted">
                                                    {item.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex gap-2">
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {item.details && (
                                            <div className="mb-4">
                                                <ul className="space-y-2 text-sm text-muted">
                                                    {item.details.map((detail, i) => (
                                                        <li key={i} className="flex gap-2">
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {item.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map(tech => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                                                    >
                          {tech}
                        </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
