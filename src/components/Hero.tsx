import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, Cpu, ShieldCheck, Gauge, Home } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

const logoUrl = 'https://i.postimg.cc/52R3RvCR/Chat-GPT-Image-20-de-jul-de-2026-16-06-12.png';

interface HeroProps {
  onOpenBudget: (serviceId?: string) => void;
}

export default function Hero({ onOpenBudget }: HeroProps) {
  const handleWhatsAppContact = () => {
    const link = getWhatsAppLink('Olá! Vi o folheto no seu site e gostaria de solicitar um orçamento para meu veículo elétrico com a assistência Virtuan.');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const categories = [
    {
      id: 'moto-eletrica',
      title: 'MOTO ELÉTRICA',
      img: 'https://i.postimg.cc/nrBW2rWj/Chat-GPT-Image-20-de-jul-de-2026-14-20-30-(1).png',
      description: 'Manutenção de motor de cubo/central, baterias e freios de motos elétricas.',
    },
    {
      id: 'patinete-eletrico',
      title: 'PATINETE ELÉTRICO',
      img: 'https://i.postimg.cc/ZKJH2wBQ/Chat-GPT-Image-20-de-jul-de-2026-14-22-36-(1).png',
      description: 'Troca de pneus, pastilhas de freio, baterias e reparos de placas.',
    },
    {
      id: 'triciclo-eletrico',
      title: 'TRICICLO ELÉTRICO',
      img: 'https://i.postimg.cc/DymJSGtg/Chat-GPT-Image-20-de-jul-de-2026-14-24-38.png',
      description: 'Revisão de diferencial, tração, sistema de ré e baterias chumbo/lítio.',
    },
    {
      id: 'hoverboard',
      title: 'HOVERBOARD',
      img: 'https://i.postimg.cc/zfNGFHPH/Chat-GPT-Image-20-de-jul-de-2026-14-26-07.png',
      description: 'Troca de sensores de giroscópio, placa lógica, carcaça e células.',
    },
  ];

  const messages = [
    'MOBILIDADE ELÉTRICA',
    'MOTOS ELÉTRICAS',
    'PATINETES ELÉTRICOS',
    'TRICICLOS ELÉTRICOS',
    'HOVERBOARDS',
    'REPARO DE BATERIAS',
    'DIAGNÓSTICO COMPUTAÇÃO'
  ];

  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % messages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: 'DIAGNÓSTICO PRECISO',
      description: 'Profissional qualificado e capacitado.',
      icon: <Wrench className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'PEÇAS DE QUALIDADE',
      description: 'Componentes e baterias homologados de alta durabilidade.',
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'REPAROS RÁPIDOS',
      description: 'Eficiência e agilidade para você voltar a rodar rápido.',
      icon: <Gauge className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'ATENDIMENTO A DOMICÍLIO',
      description: 'Comodidade com serviço de retirada e agendamento.',
      icon: <Home className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-black overflow-hidden flex flex-col justify-center">
      {/* Absolute Tech Elements inspired by Watts Mobilidade */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Outer borders similar to user banner */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-blue-600 to-yellow-500 opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Two-Column Grid for Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Logo Row */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer flex justify-center lg:justify-start w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={logoUrl}
                alt="Virtuan Consertos"
                className="h-32 sm:h-36 md:h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(234,179,8,0.5)] group-hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Title Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full px-6 py-4 md:py-6 rounded-2xl bg-gradient-to-b from-slate-900 to-black border-2 border-yellow-500/60 shadow-[0_0_30px_rgba(234,179,8,0.15)] overflow-hidden"
            >
              {/* Tech glowing horizontal lines */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 uppercase tracking-tight text-center lg:text-left">
                ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM
                <div className="h-10 sm:h-12 mt-2 flex items-center justify-center lg:justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentMsgIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="block text-white font-extrabold uppercase bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500"
                    >
                      {messages[currentMsgIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-[0.25em] flex items-center justify-center lg:justify-start gap-2 sm:gap-4"
            >
              <span className="text-yellow-500">QUALIDADE</span>
              <span className="text-blue-500">•</span>
              <span className="text-white">CONFIANÇA</span>
              <span className="text-blue-500">•</span>
              <span className="text-emerald-400">EFICIÊNCIA</span>
            </motion.p>
          </div>

          {/* Right Column (Hero Visual / Banner Photo) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group w-full max-w-md lg:max-w-full"
            >
              {/* Neon border/glowing background behind the image */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-yellow-500 via-emerald-400 to-blue-500 blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/50 bg-slate-950 shadow-[0_0_30px_rgba(234,179,8,0.25)]">
                <img
                  src="https://i.postimg.cc/J7Ph8hdw/5EDCEF8A-039D-4BD2-B1EF-6F303E839E32.jpg"
                  alt="Virtuan Oficina e Serviços de Alta Tecnologia"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                {/* Tech overlay scanner bar */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
            </motion.div>
          </div>

        </div>


        {/* 4 CARDS GRID (as seen in the flyer) */}
        <div id="servicos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scroll-mt-24">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              onClick={() => onOpenBudget(cat.id)}
              className="group relative bg-slate-900/90 rounded-2xl border-2 border-slate-800/80 hover:border-yellow-500/80 overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(234,179,8,0.25)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Product Image Frame with clean light-grey/white studio feel from flyer */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-white to-gray-100 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-115 group-hover:-rotate-2 group-hover:drop-shadow-[0_12px_20px_rgba(37,99,235,0.3)]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tech overlay label */}
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 rounded border border-yellow-500/40 text-[9px] font-mono text-yellow-500 font-bold tracking-widest">
                  SERVICE ACTIVE
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-black">
                <div>
                  <h3 className="text-base font-black text-white group-hover:text-yellow-500 transition-colors duration-200 tracking-wide mb-1 uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {cat.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                    Orçamento Grátis
                  </span>
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 group-hover:bg-[#25D366] flex items-center justify-center border border-emerald-500/40 transition-colors duration-300">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 FEATURE BADGES WITH CIRCULAR ICONS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-slate-800/80 pt-10 mb-12">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 hover:bg-slate-900/80 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="p-2.5 bg-yellow-500/10 rounded-full border border-yellow-500/30 shrink-0">
                {feat.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-1">
                  {feat.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FLYER BOTTOM CALL TO ACTION WHATSAPP BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          onClick={handleWhatsAppContact}
          className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 p-5 md:p-6 shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-all duration-300 cursor-pointer active:scale-99 flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-emerald-400/30"
        >
          {/* Pulsing neon backglow highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 border-2 border-white/80 flex items-center justify-center animate-bounce shadow-lg shrink-0">
              <WhatsAppIcon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>
            <div>
              <p className="text-white/80 text-[11px] md:text-xs font-extrabold tracking-widest uppercase mb-0.5">
                CONSERTO RÁPIDO & GARANTIDO
              </p>
              <h2 className="text-2xl md:text-3.5xl font-black text-white tracking-tight uppercase leading-none">
                FALE CONOSCO <span className="text-yellow-300 hover:scale-105 transition-transform inline-block font-mono font-black">(44) 98831-9357</span>
              </h2>
            </div>
          </div>

          <div className="px-6 py-3 bg-white text-emerald-800 font-extrabold text-sm md:text-base rounded-xl shadow-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300 uppercase tracking-wider shrink-0 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Atendimento Imediato
          </div>
        </motion.div>

      </div>
    </section>
  );
}
