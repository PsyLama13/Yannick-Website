'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react'
import { SiXing } from 'react-icons/si'
import Link from 'next/link'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'y.zutter93@gmail.com',
    href: 'mailto:y.zutter93@gmail.com',
    color: 'text-blue-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/PsyLama13',
    href: 'https://github.com/PsyLama13',
    color: 'text-purple-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yannick-zutter-288655199',
    href: 'https://www.linkedin.com/in/yannick-zutter-288655199',
    color: 'text-blue-600'
  },
  {
    icon: SiXing,
    label: 'Xing',
    value: 'xing.com/profile/Yannick_Zutter',
    href: 'https://www.xing.com/profile/Yannick_Zutter',
    color: 'text-teal-600'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bubendorf, Switzerland',
    color: 'text-green-500'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden min-h-screen" style={{paddingLeft: '150px'}}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`p-3 rounded-lg bg-card/50 ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">{info.label}</p>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10"
            >
              <h4 className="text-lg font-bold mb-3">Open For</h4>
              <ul className="text-muted leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Job opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Speaking engagements</span>
                </li>
              </ul>
              <p className="text-muted mt-4 leading-relaxed">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
