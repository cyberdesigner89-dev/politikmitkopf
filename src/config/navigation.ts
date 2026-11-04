import { withBase } from '../lib/paths';

const link = (href: string, label: string) => ({ href: withBase(href), label });

export const navigation = [
  link('/videos/', 'Videos'),
  link('/unsere-kanaele/', 'Meine Kanäle'),
  link('/shop/', 'Shop'),
  link('/informant-werden/', 'Informant werden'),
  link('/unterstuetzen/', 'Unterstützen'),
];

export const primaryCta = link('/beratungsgespraech/', 'Beratungsgespräch');

export const footerDiscover = [
  link('/videos/', 'Videos'),
  link('/unsere-kanaele/', 'Meine Kanäle'),
  link('/shop/', 'Shop'),
  link('/aktuelles/', 'Aktuelles'),
  link('/suche/', 'Suche'),
];

export const footerProject = [
  link('/ueber-uns/', 'Über uns'),
  link('/informant-werden/', 'Informant werden'),
  link('/beratungsgespraech/', 'Beratungsgespräch'),
  link('/unterstuetzen/', 'Unterstützen'),
];

export const footerLegal = [
  link('/impressum/', 'Impressum'),
  link('/datenschutz/', 'Datenschutz'),
];
