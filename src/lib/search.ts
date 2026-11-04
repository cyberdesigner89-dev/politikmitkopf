import { catalog, videoPath } from './catalog';
import { connectedSocials } from '../config/social';
import { withBase } from './paths';

export type SearchItem = {
  href: string;
  title: string;
  kind: 'Video' | 'Seite';
  text: string;
  date?: string;
};

const pages: SearchItem[] = [
  {
    href: withBase('/videos/'),
    title: 'Videos',
    kind: 'Seite',
    text: 'Videothek Archiv Beiträge durchsuchen',
  },
  {
    href: withBase('/unsere-kanaele/'),
    title: 'Meine Kanäle',
    kind: 'Seite',
    text: 'Politik mit Kopf REAGIERT YouTube Kanäle',
  },
  {
    href: withBase('/politik-mit-kopf/'),
    title: 'Politik mit Kopf',
    kind: 'Seite',
    text: 'Hauptkanal YouTube Analysen',
  },
  {
    href: withBase('/politik-mit-kopf-reagiert/'),
    title: 'Politik mit Kopf REAGIERT',
    kind: 'Seite',
    text: 'Reaktionskanal YouTube Reaktionen',
  },
  {
    href: withBase('/aktuelles/'),
    title: 'Aktuelles',
    kind: 'Seite',
    text: 'Neueste Veröffentlichungen Videos Livestream',
  },
  {
    href: withBase('/informant-werden/'),
    title: 'Informant werden',
    kind: 'Seite',
    text: 'Hinweise Unterlagen E-Mail Post Diskretion',
  },
  {
    href: withBase('/beratungsgespraech/'),
    title: 'Beratungsgespräch',
    kind: 'Seite',
    text: 'Beratung Anfrage Zusammenarbeit kontakt@politikmitkopf.de',
  },
  {
    href: withBase('/ueber-uns/'),
    title: 'Über uns',
    kind: 'Seite',
    text: 'Politik mit Kopf Projekt Kanal Beschreibung',
  },
  {
    href: withBase('/social-media/'),
    title: 'Social Media',
    kind: 'Seite',
    text: connectedSocials.map((item) => item.label).join(' '),
  },
  {
    href: withBase('/shop/'),
    title: 'Shop',
    kind: 'Seite',
    text: 'Amazon Shop Tesla Empfehlungslink Produkte',
  },
  {
    href: withBase('/unterstuetzen/'),
    title: 'Projekt unterstützen',
    kind: 'Seite',
    text: 'Spende Unterstützung IBAN',
  },
  {
    href: withBase('/impressum/'),
    title: 'Impressum',
    kind: 'Seite',
    text: 'MK Swiss Media GmbH Impressum Einsiedeln kontakt@politikmitkopf.de',
  },
  {
    href: withBase('/datenschutz/'),
    title: 'Datenschutz',
    kind: 'Seite',
    text: 'Datenschutz YouTube',
  },
];

export function searchIndex(): SearchItem[] {
  const videos: SearchItem[] = catalog.videos.map((video) => ({
    href: videoPath(video),
    title: video.title,
    kind: 'Video',
    date: video.publishedAt,
    text: `${video.title} ${video.excerpt} ${video.description} ${video.channelName} ${video.tags.join(' ')}`.slice(0, 700),
  }));
  return [...videos, ...pages];
}

export function searchContent(query: string, limit = 24): SearchItem[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return searchIndex()
    .filter((item) => item.title.toLowerCase().includes(needle) || item.text.toLowerCase().includes(needle))
    .slice(0, limit);
}
