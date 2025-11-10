import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'

const DESKTOP_IMAGES = ['/2.png', '/4.png', '/5.png']
const MOBILE_IMAGES = ['/m1.png', '/m2.png', '/m3.png', '/m4.png']

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 640)
    }

    updateView()
    window.addEventListener('resize', updateView)
    return () => window.removeEventListener('resize', updateView)
  }, [])

  const imageSet = useMemo(
    () => (isMobileView ? MOBILE_IMAGES : DESKTOP_IMAGES),
    [isMobileView]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageSet.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [imageSet.length])

  useEffect(() => {
    if (currentImageIndex >= imageSet.length) {
      setCurrentImageIndex(0)
    }
  }, [imageSet.length, currentImageIndex])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#fef5f5] to-[#f3f6fb]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {imageSet.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={image}
              alt="Hero slide"
              className="absolute inset-0 h-full w-full object-cover bg-white"
              initial={{ scale: 1.05 }}
              animate={{ scale: index === currentImageIndex ? 1 : 1.05 }}
              transition={{ duration: 8, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85"></div>
          </motion.div>
        ))}
      </div>

      {/* Soft accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-[#fde4e4]/70 blur-3xl" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#dbe9ff]/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b71c1c] via-[#e63946] to-[#102a43] tracking-[-0.01em] whitespace-nowrap text-2xl sm:text-5xl lg:text-6xl leading-[1.3] sm:leading-[1.2] lg:leading-[1.1] drop-shadow-[0_6px_18px_rgba(16,42,67,0.35)]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Bridging Distances, Building Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-5 text-base sm:text-xl text-[#243247] max-w-3xl mx-auto leading-relaxed"
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
        {imageSet.map((_, index) => (
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
