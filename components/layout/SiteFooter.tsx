import Link from "next/link";
import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brass/30 bg-white py-10 mt-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-ink">OldFont.net</p>
            <p className="mt-2 text-sm text-gray-700">
              OldFont.net is an online old font generator focused on old English, vintage, gothic, and typewriter style fonts.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Tools</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><Link href="/old-font-generator" className="hover:text-brass">Old Font Generator</Link></li>
              <li><Link href="/old-english-font-generator" className="hover:text-brass">Old English Font Generator</Link></li>
              <li><Link href="/typewriter-font-generator" className="hover:text-brass">Typewriter Font Generator</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">About</p>
            <p className="mt-2 text-sm text-gray-700">Built for designers, creators, and anyone who loves vintage-inspired typography.</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-600">© {new Date().getFullYear()} OldFont.net. All rights reserved.</div>
      </Container>
    </footer>
  );
}
