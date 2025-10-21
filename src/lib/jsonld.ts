import { site } from '../config/site'

export function localBusinessJsonLd(overrides: Record<string, unknown> = {}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.businessName,
    url: site.websiteUrl,
    image: `${site.websiteUrl}/og-image.jpg`,
    telephone: site.phone,
    priceRange: site.priceRange,
    areaServed: site.serviceAreas,
    openingHours: site.hours,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry
    },
    sameAs: Object.values(site.social)
  }
  return { ...json, ...overrides }
}
