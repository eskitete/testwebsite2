export const site = {
  businessName: 'Oak & Iron Handyman',
  tagline: 'Same-Week Handyman Help—Quality You Can See.',
  phone: '+1-555-555-5555',
  email: 'hello@example.com',
  address: {
    streetAddress: '123 Main St',
    addressLocality: 'YourTown',
    addressRegion: 'ST',
    postalCode: '00000',
    addressCountry: 'US'
  },
  serviceAreas: ['YourTown', 'Nearby City', 'Surrounding Areas'],
  hours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-14:00'
  ],
  priceRange: '$$',
  websiteUrl: 'https://example.com',
  social: {
    google: 'https://maps.google.com',
    yelp: 'https://yelp.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  }
}

export type SiteConfig = typeof site
