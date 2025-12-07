"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/old-font-generator", label: "Old Font Generator" },
  { href: "/old-english-font-generator", label: "Old English" },
  { href: "/typewriter-font-generator", label: "Typewriter" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-brass/30">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-semibold tracking-tight text-ink">
            OldFont<span className="text-brass">.net</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm font-medium text-ink">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded px-3 py-2 transition-colors hover:bg-parchment ${isActive ? "text-brass" : "text-ink"}`}
                    >
                      {link.label}
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
