import React from 'react'
import { site } from '../config/site'

export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-transparent">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} {site.businessName}</div>
          <div className="space-x-4">
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-500">
          {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}{' '}
          {site.address.postalCode} • {site.phone}
        </div>
      </div>
    </footer>
  )
}
