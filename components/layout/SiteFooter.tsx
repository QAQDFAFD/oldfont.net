import Link from "next/link";
import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brass/30 bg-white py-10 mt-16 dark:bg-gray-900 dark:border-gray-700">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-ink dark:text-gray-100">OldFont.net</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              OldFont.net is an online old font generator focused on old English, vintage, gothic, and typewriter style fonts.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink dark:text-gray-100">Tools</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-400">
              <li><Link href="/old-font-generator" className="hover:text-brass dark:hover:text-amber-400">Old Font Generator</Link></li>
              <li><Link href="/old-english-font-generator" className="hover:text-brass dark:hover:text-amber-400">Old English Font Generator</Link></li>
              <li><Link href="/typewriter-font-generator" className="hover:text-brass dark:hover:text-amber-400">Typewriter Font Generator</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink dark:text-gray-100">About</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Built for designers, creators, and anyone who loves vintage-inspired typography.</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-600 dark:text-gray-500">© {new Date().getFullYear()} OldFont.net. All rights reserved.</div>
      </Container>
    </footer>
  );
}
