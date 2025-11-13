import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '917303667600';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-transparent border-0 outline-0 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 flex items-center justify-center group no-underline"
      aria-label="Contact us on WhatsApp"
      style={{ border: 'none !important', outline: 'none !important', boxShadow: 'none' }}
    >
      <motion.img
        src="/whatsapp logo (1).webp"
        alt="WhatsApp"
        className="w-14 h-14 md:w-16 md:h-16 object-contain border-0 outline-0 group-hover:rotate-12 transition-transform duration-300"
        style={{ border: 'none !important', outline: 'none !important', display: 'block', boxShadow: 'none' }}
      />
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-30 blur-xl pointer-events-none"
      />
    </motion.a>
  );
}

