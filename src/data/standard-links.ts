// Standards referenced by the knowledge base, mapped to the issuing body's own
// catalogue page. Only IDs verified against iso.org / iest.org / iatfglobaloversight.org
// are linked; anything unverified stays as plain text in the article rather than
// pointing at a guessed URL.
//
// The standard text itself is never reproduced — the link is a pointer for readers
// who want the authoritative document.

export interface StandardRef {
  match: RegExp;
  label: string;
  url: string | null;
  issuer: string;
}

export const standardRefs: StandardRef[] = [
  {
    match: /ISO\s?16890/i,
    label: 'ISO 16890-1:2016 — Air filters for general ventilation: classification based on particulate matter efficiency (ePM)',
    url: 'https://www.iso.org/standard/57864.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?29463/i,
    label: 'ISO 29463-1:2024 — High-efficiency filters and filter media for removing particles in air',
    url: 'https://www.iso.org/standard/84367.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?14644/i,
    label: 'ISO 14644-1:2015 — Cleanrooms and associated controlled environments: classification of air cleanliness by particle concentration',
    url: 'https://www.iso.org/standard/53394.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?5011/i,
    label: 'ISO 5011 — Inlet air cleaning equipment for internal combustion engines and compressors: performance testing',
    url: 'https://www.iso.org/standard/64762.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?2859/i,
    label: 'ISO 2859-1 — Sampling procedures for inspection by attributes, indexed by acceptance quality limit (AQL)',
    url: 'https://www.iso.org/standard/1141.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?8573/i,
    label: 'ISO 8573-1:2010 — Compressed air: contaminants and purity classes',
    url: 'https://www.iso.org/standard/46418.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?9001/i,
    label: 'ISO 9001 — Quality management systems: requirements',
    url: 'https://www.iso.org/standard/62085.html',
    issuer: 'ISO',
  },
  {
    match: /ISO\s?13485/i,
    label: 'ISO 13485:2016 — Medical devices: quality management systems',
    url: 'https://www.iso.org/standard/59752.html',
    issuer: 'ISO',
  },
  {
    match: /IEST-RP-CC034/i,
    label: 'IEST-RP-CC034 — HEPA and ULPA filter leak tests',
    url: 'https://www.iest.org/Standards-RPs/Recommended-Practices/IEST-RP-CC034',
    issuer: 'IEST',
  },
  {
    match: /IATF\s?16949/i,
    label: 'IATF 16949 — Automotive quality management system standard',
    url: 'https://www.iatfglobaloversight.org/',
    issuer: 'IATF',
  },
];

/** Standards cited in a given article body, in the order they first appear. */
export function standardsIn(body: string | undefined): StandardRef[] {
  if (!body) return [];
  const found = standardRefs.filter((ref) => ref.match.test(body));
  return found.sort(
    (a, b) => (body.search(a.match) || 0) - (body.search(b.match) || 0),
  );
}
