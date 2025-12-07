"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/old-font-generator", label: "Old Font Generator", featured: true },
  { href: "/old-english-font-generator", label: "Old English" },
  { href: "/typewriter-font-generator", label: "Typewriter" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-brass/30">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-icon.svg" alt="OldFont.net Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold tracking-tight text-ink">
              OldFont<span className="text-brass">.net</span>
            </span>
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm font-medium text-ink">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative rounded px-3 py-2 transition-colors hover:bg-parchment ${isActive ? "text-brass" : "text-ink"}`}
                    >
                      {link.label}
                      {link.featured && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-[10px] shadow-lg">
                            👑
                          </span>
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
