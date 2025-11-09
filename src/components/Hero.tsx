import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const heroImages = [
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
]

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-white via-[#fef5f5] to-[#f3f6fb]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#fde4e4]/70 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#dbe9ff]/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      {/* Fixed logo top-left */}
      <motion.img
        src="/tpbridge-logo.png"
        alt="Tipping Bridge"
        className="absolute top-20 left-4 sm:top-24 sm:left-12 w-24 sm:w-32 md:w-40 object-contain z-20"
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 pt-44 sm:pt-48 pb-20 sm:pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0b1f33] leading-tight"
        >
          Your Trusted Partner for NRI Services in India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-lg text-[#34445a] max-w-2xl mx-auto"
        >
          Connecting families across continents with expert care, seamless service, and unwavering trust. Experience peace of mind with India's most trusted NRI concierge service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#c53030] to-[#7a0b0b] text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-[#c53030]/40 transition-all duration-300 hover:scale-105"
          >
            <span>Our Services</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border-2 border-[#c53030] text-[#0b1f33] rounded-full font-semibold text-base sm:text-lg hover:bg-[#c53030]/10 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-[#f87171] w-8' : 'bg-[#0b1f33]/40 w-2 hover:bg-[#c53030]/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
