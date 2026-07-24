import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink, trackWhatsAppConversion } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

const logoUrl = 'https://i.postimg.cc/52R3RvCR/Chat-GPT-Image-20-de-jul-de-2026-16-06-12.png';

interface HeaderProps {
  onOpenBudget: () => void;
}

export default function Header({ onOpenBudget }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
  ];

  const headerWhatsappUrl = getWhatsAppLink('Olá! Acessei o site da Virtuan Consertos e gostaria de falar com um especialista sobre manutenção.');

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Virtuan Consertos">
            <img
              src={logoUrl}
              alt="Virtuan Consertos Logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(234,179,8,0.45)] group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBudget}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white transition-all duration-300 shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] active:scale-95 cursor-pointer font-black"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Simular Orçamento
            </button>
            <a
              href={headerWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppConversion(headerWhatsappUrl)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold border border-[#25D366]/40 bg-slate-900/60 hover:bg-slate-800 text-[#25D366] hover:text-white transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            viewport={{ once: true }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBudget();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Orçamento
                </button>
                <a
                  href={headerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setIsOpen(false);
                    trackWhatsAppConversion(headerWhatsappUrl);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-bold border border-[#25D366]/40 bg-slate-900 text-[#25D366] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
