import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

const Home = lazy(() => import('./routes/Home'))
const Services = lazy(() => import('./routes/Services'))
const Estimate = lazy(() => import('./routes/Estimate'))
const Gallery = lazy(() => import('./routes/Gallery'))
const About = lazy(() => import('./routes/About'))
const Contact = lazy(() => import('./routes/Contact'))
const Notes = lazy(() => import('./routes/Notes'))
const NotFound = lazy(() => import('./routes/NotFound'))

export default function App() {
  return (
    <div className="min-h-screen bg-sand text-ink font-body">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/estimate" element={<Estimate />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/notes/:slug" element={<Notes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
