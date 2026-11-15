import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import About from './components/About'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-neon focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <About />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
