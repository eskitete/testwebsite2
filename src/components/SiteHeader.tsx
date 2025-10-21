import React from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../config/site'
import { formatSmsLink } from '../lib/phone'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 backdrop-blur-sm bg-white/60 dark:bg-black/50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-heading text-xl font-bold">Oak & Iron</NavLink>
        <nav className="space-x-4 hidden md:flex">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/estimate">Estimate</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a className="btn px-3 py-1.5 bg-primary text-white rounded" href={formatSmsLink(site.phone)}>Text</a>
        </div>
        <div className="md:hidden">Menu</div>
      </div>
    </header>
  )
}
