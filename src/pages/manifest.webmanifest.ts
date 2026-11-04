import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL;
  const manifest = {
    name: 'Politik mit Kopf',
    short_name: 'Politik mit Kopf',
    description: 'Videos, Analysen und aktuelle Beiträge von Politik mit Kopf.',
    start_url: base,
    scope: base,
    display: 'standalone',
    lang: 'de',
    background_color: '#090c11',
    theme_color: '#0a0b0d',
    icons: [
      {
        src: `${base}favicon.svg`,
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
