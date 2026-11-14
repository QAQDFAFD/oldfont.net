export const SITE_ORIGIN = "https://oldfont.net";

// Root canonical has no extra trailing slash. With trailingSlash disabled, Next.js
// normalizes metadata URLs to this form, and it is the canonical already published.
// `https://oldfont.net` and `https://oldfont.net/` are the same request path (`/`).
export const HOME_URL = SITE_ORIGIN;

export function pageUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  if (!clean) return HOME_URL;
  return `${SITE_ORIGIN}/${clean}`;
}
