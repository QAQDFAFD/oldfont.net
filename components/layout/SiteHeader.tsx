'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Container from './Container'

type NavLink = {
  href: '/' | '/old-font-generator' | '/old-english-font-generator' | '/typewriter-font-generator' | '/free-old-fonts-download'
  label: string
  featured?: boolean
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/old-font-generator', label: 'Old Font Generator', featured: true },
  { href: '/old-english-font-generator', label: 'Old English' },
  { href: '/typewriter-font-generator', label: 'Typewriter' },
  { href: '/free-old-fonts-download', label: 'Download Fonts' }
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-30 border-b border-brass/30 bg-white/90 backdrop-blur'>
      <Container>
        <div className='flex items-center justify-between py-3 md:py-4'>
          <Link href='/' className='flex items-center gap-2'>
            <img src='/logo-icon.svg' alt='OldFont.net Logo' className='h-8 w-8 md:h-10 md:w-10' />
            <span className='text-lg font-semibold tracking-tight text-ink md:text-xl'>
              OldFont<span className='text-brass'>.net</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label='Primary' className='hidden md:block'>
            <ul className='flex items-center gap-1 text-sm font-medium text-ink lg:gap-4'>
              {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative rounded px-2 py-2 transition-colors hover:bg-parchment lg:px-3 ${isActive ? 'text-brass' : 'text-ink'}`}>
                      {link.label}
                      {link.featured && (
                        <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center'>
                          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75'></span>
                          <span className='relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-[10px] shadow-lg'>
                            👑
                          </span>
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-parchment md:hidden'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? (
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav aria-label='Mobile navigation' className='border-t border-brass/20 pb-4 md:hidden'>
            <ul className='flex flex-col gap-1 pt-2'>
              {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-parchment ${isActive ? 'bg-parchment text-brass' : 'text-ink'}`}>
                      {link.label}
                      {link.featured && (
                        <span className='inline-flex h-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-2 text-[10px] text-white shadow-sm'>
                          👑 Featured
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  )
}
