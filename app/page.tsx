import FontGeneratorTool from "@/components/tools/FontGeneratorTool";
import { breadcrumbSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const heroCta = [
  { href: "/old-font-generator", label: "Use Old Font Generator" },
  { href: "/old-english-font-generator", label: "Old English Generator" },
];

export default function HomePage() {
  const schema = [websiteSchema(), organizationSchema(), breadcrumbSchema([{ name: "Home", url: "https://oldfont.net/" }])];

  return (
    <div className="space-y-12 pb-16">
      <section className="rounded-2xl border border-brass/30 bg-white p-8 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-brass">Vintage typography made easy</p>
            <h1 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Old Font Generator & Old English Text Online
            </h1>
            <p className="text-lg text-gray-700">
              OldFont.net helps you turn ordinary words into old English, gothic, vintage, and typewriter-style lettering. Type
              once, preview instantly, and copy your stylized text for social posts, logos, tattoos, or print designs.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroCta.map((cta) => (
                <a
                  key={cta.href}
                  className="rounded-md bg-brass px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brass/90"
                  href={cta.href}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-brass/30 bg-parchment/70 p-4">
            <FontGeneratorTool
              pageTitle="Try the Old Font Generator"
              pageDescription="Type and preview classic blackletter, gothic, and typewriter lettering."
              primaryKeyword="old font generator"
              secondaryKeywords={["old english font generator", "vintage font generator"]}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {["Multiple old fonts", "Instant preview", "Copy & paste ready"].map((title) => (
          <div key={title} className="rounded-xl border border-brass/30 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-2 text-sm text-gray-700">
              Switch between Old English, gothic, vintage, and typewriter font styles without downloading anything. Everything is
              rendered live in your browser for a fast workflow.
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink">Popular tools</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[{ href: "/old-font-generator", title: "Old Font Generator" }, { href: "/old-english-font-generator", title: "Old English Font Generator" }, { href: "/typewriter-font-generator", title: "Typewriter Font Generator" }].map((tool) => (
            <a key={tool.href} className="rounded-xl border border-brass/30 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg" href={tool.href}>
              <p className="text-lg font-semibold text-ink">{tool.title}</p>
              <p className="mt-2 text-sm text-gray-700">Preview, customize, and copy text in an instant. Perfect for social bios, captions, logos, and more.</p>
            </a>
          ))}
        </div>
      </section>

      <section className="prose prose-stone max-w-none space-y-6 text-gray-800">
        <h2>What Is an Old Font Generator?</h2>
        <p>
          An <strong>old font generator</strong> is a simple online tool that lets you style text with vintage and blackletter-inspired typefaces without installing any software. OldFont.net focuses on speed and accessibility: type a phrase, choose a font, adjust size and line height, and copy the final text or HTML. Designers use these generators to produce headers that feel historical, creators add flair to social bios, and small businesses use them to test ideas before committing to a logo.
        </p>
        <p>
          Because everything runs in the browser, the experience is instant. Whether you search for an <em>old english font text generator copy and paste</em> or an <em>olde english font generator</em>, the workflow is identical: type, preview, and copy.
        </p>

        <h2>Old English vs Olde English vs Gothic Fonts</h2>
        <p>
          Old English and Olde English refer to heavy blackletter scripts that feature ornate strokes, sharp serifs, and medieval-inspired proportions. Gothic fonts share the same heritage but often include more geometric details. OldFont.net groups these options together so you can quickly compare a bold blackletter, a decorative gothic display, or a softer vintage serif. The contrast between letters makes them ideal for titles, certificates, and tattoos where personality matters.
        </p>
        <p>
          Our tool lists multiple options: a classic blackletter for traditional vibes, a vintage serif for elegant headings, and a retro typewriter face when you want analog charm. Switching fonts takes one click, letting you see how the same words change character across styles.
        </p>

        <h2>How to Use an Old Font Generator for Social Media and Logos</h2>
        <p>
          Start with the Old Font Generator to test short phrases. Increase the font size for Instagram bios, or tighten the line height for compact TikTok captions. Because you can copy HTML, you can paste the styled snippet into website builders or newsletters. If you want a throwback mood, choose the typewriter option; for regal branding, try the Old English face. The combination of fast previewing and adjustable spacing makes it easy to align typography with your visual identity.
        </p>
        <p>
          Need consistent branding? Save your favorite font combination and reuse it across profile banners, thumbnails, and product labels. The more you experiment, the easier it becomes to match your text to the emotions you want readers to feel.
        </p>

        <h2>Frequently Asked Questions About Old Fonts Online</h2>
        <p>
          <strong>Is OldFont.net free to use?</strong> Yes. The core <em>old font generator</em>, <em>old english font generator</em>, and <em>typewriter font generator</em> experiences are free and run directly in your browser.
        </p>
        <p>
          <strong>Can I copy and paste the results?</strong> Absolutely. Use the Copy Text button for plaintext or Copy HTML to keep inline styling. It works for social bios, messaging apps, and website builders.
        </p>
        <p>
          <strong>Do I need to download fonts?</strong> No. Everything loads from the web or from the built-in font stack, so you can focus on creativity instead of setup.
        </p>
      </section>

      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(schema)}
      </script>
    </div>
  );
}
