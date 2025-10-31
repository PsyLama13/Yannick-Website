'use client'

import { useState } from 'react'
import { HiMenu, HiX, HiHome, HiUser, HiBriefcase, HiChatAlt2, HiMail } from 'react-icons/hi'
import { FaCode } from 'react-icons/fa'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/constants/socialLinks'

const navItems = [
  { name: 'Home', href: '/', icon: HiHome },
  { name: 'About', href: '/about', icon: HiUser },
  { name: 'Projects', href: '/projects', icon: FaCode },
  { name: 'Career', href: '/experience', icon: HiBriefcase },
  { name: 'Talks', href: '/talks', icon: HiChatAlt2 },
  { name: 'Contact', href: '/contact', icon: HiMail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarHovered, setIsSidebarHovered] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className="hidden md:flex fixed left-0 top-0 h-full bg-background/95 backdrop-blur-xl border-r border-card/50 z-50 flex-col transition-all duration-300 ease-in-out"
        style={{ width: isSidebarHovered ? '256px' : '96px' }}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        {/* Logo */}
        <div className="p-6 border-b border-card/50 flex justify-center" style={{ marginBottom: '15px' }}>
          <Link href="/" className="group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
              <span className="text-white font-bold text-xl">YZ</span>
            </div>
          </Link>
        </div>
        {/* Navigation Items */}
        <div className="flex-1 p-6 space-y-2" style={{ paddingTop: '0' }}>
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-center text-background hover:text-white transition-all text-sm font-semibold rounded-lg bg-primary hover:bg-primary/80 shadow-md hover:shadow-lg hover:shadow-primary/30 whitespace-nowrap overflow-hidden"
                style={{
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: isSidebarHovered ? '16px' : '12px',
                  paddingRight: isSidebarHovered ? '16px' : '12px',
                  border: '2px solid #000000'
                }}
              >
                {!isSidebarHovered ? (
                  <Icon className="h-5 w-5" />
                ) : (
                  <span>{item.name}</span>
                )}
              </Link>
            )
          })}
        </div>

        {/* Social Links */}
        <div className="p-6 border-t border-card/50 space-y-4">
          <div className={`flex justify-center transition-all duration-300 ${isSidebarHovered ? 'gap-3' : 'gap-2 flex-col items-center'}`}>
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 text-muted hover:text-primary transition-all hover:scale-110"
                  aria-label={link.name}
                  style={{paddingBottom: '9px'}}
                >
                  <Icon className={`transition-all duration-300 ${isSidebarHovered ? 'h-8 w-8' : 'h-6 w-6'}`} />
                </a>
              )
            })}
          </div>

          {/* Impressum */}
          {isSidebarHovered && (
            <div className="text-center transition-opacity duration-300">
              <p className="text-s text-muted mb-2">
                &copy; {currentYear} Yannick Zutter
              </p>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="md:hidden fixed top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-card/50">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
              <span className="text-white font-bold text-lg">YZ</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="h-6 w-6 text-foreground" />
            ) : (
              <HiMenu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-card/95 backdrop-blur-xl border-t border-card-border">
            <div className="px-6 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-muted hover:text-foreground hover:bg-background/50 rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-card/50">
                <div className="flex justify-center gap-3 mb-4">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-card hover:bg-primary/20 text-muted hover:text-primary transition-all"
                        aria-label={link.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
