import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

interface CTASectionProps {
  onOpenBudget: () => void;
}

export default function CTASection({ onOpenBudget }: CTASectionProps) {
  const handleWhatsAppContact = () => {
    const link = getWhatsAppLink('Olá! Estive navegando pelo final do site Virtuan e gostaria de agendar um atendimento urgente para o meu veículo elétrico.');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative cyber glowing neon lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-800 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-800 to-transparent" />
      
      {/* Radial ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Rolling Text Marquee Animation */}
        <div className="w-full max-w-xl mx-auto overflow-hidden py-3 px-1 bg-slate-950/90 rounded-full border border-yellow-500/40 flex items-center shadow-[0_0_20px_rgba(234,179,8,0.15)]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 18,
              repeat: Infinity,
            }}
          >
            {/* First half */}
            <div className="flex items-center shrink-0">
              <span className="text-xs sm:text-sm font-black text-yellow-400 uppercase tracking-wider mx-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-yellow-500 animate-spin-slow" />
                Seu veículo elétrico merece assistência técnica especializada.
              </span>
              <span className="text-xs sm:text-sm font-black text-yellow-400 uppercase tracking-wider mx-4">•</span>
            </div>
            {/* Second half (identical mirror to create loop) */}
            <div className="flex items-center shrink-0">
              <span className="text-xs sm:text-sm font-black text-yellow-400 uppercase tracking-wider mx-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-yellow-500 animate-spin-slow" />
                Seu veículo elétrico merece assistência técnica especializada.
              </span>
              <span className="text-xs sm:text-sm font-black text-yellow-400 uppercase tracking-wider mx-4">•</span>
            </div>
          </motion.div>
        </div>

        {/* Strong Final Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Seu veículo elétrico merece <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-blue-400">
            assistência técnica especializada.
          </span>
        </h2>

        {/* Pitch Copy */}
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Evite prejuízos maiores com curiosos ou assistências genéricas. Recupere a autonomia da sua bateria de lítio e a segurança de sua pilotagem.
        </p>

        {/* Interactive Big CTA Buttons styled in WhatsApp green */}
        <div className="flex justify-center items-center pt-4">
          <button
            onClick={onOpenBudget}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-500 text-white font-black text-lg rounded-2xl transition-all shadow-[0_0_35px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] cursor-pointer active:scale-98 flex items-center justify-center gap-3.5 group/btn"
          >
            <WhatsAppIcon className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] group-hover/btn:scale-115 transition-transform duration-300 animate-pulse" />
            Entre em contato agora mesmo
            <ArrowRight className="w-5 h-5 text-yellow-300 drop-shadow-[0_0_6px_rgba(234,179,8,0.8)] group-hover/btn:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Guarantee and trust signals directly below the buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-10">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300">
            <ShieldCheck className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-slate-300 text-xs sm:text-sm font-extrabold">Diagnóstico Preliminar 100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300">
            <ShieldCheck className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-slate-300 text-xs sm:text-sm font-extrabold">Retirada Expressa Agendada</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300">
            <ShieldCheck className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-slate-300 text-xs sm:text-sm font-extrabold">Peças Homologadas em Estoque</span>
          </div>
        </div>

      </div>
    </section>
  );
}
