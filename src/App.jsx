import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
