import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <main>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App

