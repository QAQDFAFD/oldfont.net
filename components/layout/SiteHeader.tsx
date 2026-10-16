'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Container from './Container'
import { useTheme } from '@/components/providers/ThemeProvider'

type NavLink = {
  href: '/' | '/old-font-generator' | '/old-english-font-generator' | '/typewriter-font-generator' | '/old-internet-font-generator' | '/free-old-fonts-download'
  label: string
  featured?: boolean
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/old-font-generator', label: 'Old Font Generator', featured: true },
  { href: '/old-english-font-generator', label: 'Old English' },
  { href: '/typewriter-font-generator', label: 'Typewriter' },
  { href: '/old-internet-font-generator', label: 'Old Internet' },
  { href: '/free-old-fonts-download', label: 'Download Fonts' }
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className='sticky top-0 z-30 border-b border-brass/30 bg-white/90 backdrop-blur dark:bg-gray-900/90 dark:border-gray-700'>
      <Container>
        <div className='flex items-center justify-between py-3 md:py-4'>
          <Link href='/' className='flex items-center gap-2'>
            <img src='/logo-icon.svg' alt='OldFont.net Logo' className='h-8 w-8 md:h-10 md:w-10' />
            <span className='text-lg font-semibold tracking-tight text-ink md:text-xl dark:text-gray-100'>
              OldFont<span className='text-brass'>.net</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label='Primary' className='hidden md:block'>
            <ul className='flex items-center gap-1 text-sm font-medium text-ink lg:gap-4 dark:text-gray-300'>
              {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative rounded px-2 py-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${isActive ? 'text-brass dark:text-amber-400' : 'text-ink dark:text-gray-300'}`}>
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

          {/* Theme Toggle Button */}
          <button
            type='button'
            onClick={toggleTheme}
            className='flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
            {theme === 'light' ? (
              <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
              </svg>
            ) : (
              <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-gray-200 md:hidden dark:text-gray-300 dark:hover:bg-gray-700'
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
          <nav aria-label='Mobile navigation' className='border-t border-brass/20 pb-4 md:hidden dark:border-gray-700'>
            <ul className='flex flex-col gap-1 pt-2'>
              {navLinks.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive ? 'bg-parchment text-brass dark:bg-gray-800 dark:text-amber-400' : 'text-ink dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
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
