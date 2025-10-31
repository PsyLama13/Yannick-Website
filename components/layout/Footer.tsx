import { SiGithub, SiLinkedin, SiXing } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/PsyLama13',
    icon: SiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yannick-zutter-288655199',
    icon: SiLinkedin,
  },
  {
    name: 'Xing',
    href: 'https://www.xing.com/profile/Yannick_Zutter',
    icon: SiXing,
  },
  {
    name: 'Email',
    href: 'mailto:y.zutter93@gmail.com',
    icon: MdEmail,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-md border-t border-card/50 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted">Connect:</span>
            <div className="flex space-x-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card hover:bg-primary/20 text-muted hover:text-primary transition-all hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted">
              &copy; {currentYear} Yannick Zutter. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
