import { motion } from 'motion/react';
import { getWhatsAppLink } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const handleWhatsAppFloat = () => {
    const link = getWhatsAppLink('Olá! Estou navegando no site da Virtuan Consertos e gostaria de falar imediatamente com o técnico de plantão.');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Outer pulsing ring for aesthetic emphasis and CRO */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

      <motion.button
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppFloat}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.5)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#090d16]"
        title="Falar no WhatsApp"
        aria-label="Contact Virtuan on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </motion.button>
    </div>
  );
}
