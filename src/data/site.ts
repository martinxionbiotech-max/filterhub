// Central site config — single source for brand/contact facts (kept consistent site-wide).
// EEAT entity alignment (2026-10-30): brand "Huiying" · operating legal entity
// "Qinghe County Huiying Automotive Parts Co., Ltd." — the SAME entity as carfilterspro.com
// (one legal body, two storefronts). Business-registration facts mirror carfilterspro.

export const site = {
  brand: 'Huiying',
  domain: 'chinafilterhub.com', // placeholder domain
  siteUrl: 'https://chinafilterhub.com',
  dataSubsiteUrl: 'https://data.chinafilterhub.com',
  // Full company profile lives on the primary storefront (no duplicated company story here).
  companyProfileUrl: 'https://carfilterspro.com/company-profile/',
  factoryUrl: 'https://carfilterspro.com/factory/',

  // Verified business-registration facts (Tianyancha snapshot via Sogou aggregation,
  // retrieved 2026-10-25 — same values as carfilterspro.com).
  entity: {
    legalName: 'Qinghe County Huiying Automotive Parts Co., Ltd.',
    legalNameZh: '清河县汇盈汽车零部件有限公司',
    creditCode: '91130534MA0958NT84',
    legalRepresentative: 'Liu Fengxiu',
    address:
      'North of Minjiang Street, west of Jiuhuashan Road, Qinghe County, Xingtai City, Hebei Province, China',
    email: 'Martin@chinafilterhub.com',
    phone: '+86 13323237275',
    whatsappLink: 'https://wa.me/8613323237275',
    foundingDate: '2017-10-10', // legal-entity incorporation date
    since: 1996, // brand lineage — the Huiying brand traces back to 1996
  },

  // Baidu Baike company entry (region-blocked 403 on crawl; URL is the authoritative citation).
  baikeUrl:
    'https://baike.baidu.com/item/%E6%B8%85%E6%B2%B3%E5%8E%BF%E6%B1%87%E7%9B%88%E6%B1%BD%E8%BD%A6%E9%9B%B6%E9%83%A8%E4%BB%B6%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/54139720',

  // Brand ↔ legal-entity relationship — single unambiguous statement, mirror of carfilterspro.
  brandRelationship:
    '"Huiying" is the brand name. The operating legal entity is Qinghe County Huiying Automotive Parts Co., Ltd.',

  tagline: 'Filter product information & database hub',
  positioning:
    'A product information and database hub for automotive, HVAC and cleanroom filters, operated by Qinghe County Huiying Automotive Parts Co., Ltd.',

  // Honesty disclosure — rendered in the footer and referenced in schema.
  disclosure:
    'Operating legal entity: Qinghe County Huiying Automotive Parts Co., Ltd. (unified social credit code 91130534MA0958NT84). No certification, customer reference or factory figure is presented without a traceable source.',
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

// Organisation JSON-LD — aligned with carfilterspro.com (same legal entity, same fields).
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://chinafilterhub.com/#organization',
  name: site.entity.legalName,
  legalName: site.entity.legalName,
  alternateName: [site.brand, 'Huiying Automotive Parts'],
  url: site.siteUrl,
  foundingDate: site.entity.foundingDate,
  telephone: site.entity.phone,
  email: site.entity.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: 'Hebei Province',
    addressLocality: 'Qinghe County, Xingtai City',
    streetAddress: 'North of Minjiang Street, west of Jiuhuashan Road',
  },
  sameAs: [site.baikeUrl],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    name: 'Martin',
    email: site.entity.email,
    telephone: site.entity.phone,
  },
};
