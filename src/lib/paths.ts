const baseUrl = import.meta.env.BASE_URL || '/';

function normalizedBase(): string {
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}

/** Prefix a site-root path with Astro's `base` (`import.meta.env.BASE_URL`). External URLs stay unchanged. */
export function withBase(path: string): string {
  const base = normalizedBase();
  if (!path) return base;
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//') || path.startsWith('#')) return path;
  if (base !== '/' && (path === base || path.startsWith(base))) return path;
  if (path === '/') return base;
  const suffix = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${suffix}`;
}

/** Absolute public URL, including the Pages project path. */
export function absoluteUrl(path: string, origin: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
  const root = origin.endsWith('/') ? origin : `${origin}/`;
  return new URL(withBase(path), root).href;
}
