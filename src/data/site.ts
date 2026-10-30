// Central site config — single source for brand/contact facts (kept consistent site-wide).
// Phase 2: brand and domain are PLACEHOLDERS. Legal-entity fields are `provisional`
// pending business-licence verification — do NOT write real values yet (see docs/eeat-plan.md).

export const site = {
  brand: 'Qinghe Yinghui Filter',
  domain: 'chinafilterhub.com', // placeholder domain
  siteUrl: 'https://chinafilterhub.com',
  dataSubsiteUrl: 'https://data.chinafilterhub.com',

  // Brand vs legal entity — both provisional until verified.
  // The legal entity full name, credit code, address, phone and email are all placeholders.
  entity: {
    legalName: '[provisional: legalName]',
    legalNameZh: '[provisional: legalNameZh]',
    creditCode: '[provisional: creditCode]',
    address: '[provisional: address]',
    email: '[provisional: email]',
    phone: '[provisional: phone]',
  },

  tagline: 'Filter manufacturer & exporter',
  positioning:
    'A filter manufacturer and exporter positioned in the Qinghe filter industry cluster of Hebei province.',

  // Honesty disclosure — rendered on the company page and referenced in schema.
  disclosure:
    'Brand, entity and domain details are provisional pending business-licence verification. No certification, customer reference or factory figure is presented without a traceable source.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/' },
  { label: 'Factory', href: '/factory/' },
  { label: 'OEM / Private Label', href: '/oem/' },
  { label: 'Buyer Guides', href: '/guides/' },
  { label: 'Company', href: '/company/' },
  { label: 'Contact', href: '/contact/' },
];

export const complianceLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Cookie Policy', href: '/cookies/' },
];

// Organisation JSON-LD — only confirmed fields. Entity fields are provisional, so
// legalName/address/telephone/email/vatID/identifier are omitted until verified.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://chinafilterhub.com/#organization',
  name: site.brand,
  url: site.siteUrl,
  description: site.positioning,
};
