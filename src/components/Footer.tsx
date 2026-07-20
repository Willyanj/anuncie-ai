import { Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

const logoUrl = 'https://i.postimg.cc/52R3RvCR/Chat-GPT-Image-20-de-jul-de-2026-16-06-12.png';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const link = getWhatsAppLink('Olá! Gostaria de falar com a assistência Virtuan para solicitar uma manutenção do meu veículo elétrico.');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const coverageAreas = [
    'Terra Boa, PR',
    'Cruzeiro do Oeste, PR',
    'Jussara, PR',
    'Umuarama, PR',
    'Francisco Alves, PR',
    'Doutor Camargo, PR',
    'Cianorte, PR',
    'Guaíra, PR',
    'Iporã, PR',
    'Palotina, PR'
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Schema.org JSON-LD LocalBusiness metadata for professional SEO optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Virtuan Consertos Elétricos',
            'image': logoUrl,
            'telephone': '+55 (44) 98831-9357',
            'email': 'virtuanconsertos@gmail.com'
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Brand + Contacts + Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand block (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block group" aria-label="Virtuan Consertos">
              <img
                src={logoUrl}
                alt="Virtuan Consertos Logo"
                className="h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.4)] group-hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Líder regional em assistência técnica de lítio, diagnóstico avançado por computador e reparos de veículos elétricos. Tecnologia, transparência e segurança. Somos especializada em conserto de veículos elétricos, incluindo moto elétrica, patinete elétrico, triciclo elétrico e hoverboard.
            </p>

            {/* Social Icons */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs text-slate-500 font-bold tracking-wider uppercase">Sigam nossas redes sociais</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/virtuanconsertos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300"
                  title="Sigam @virtuanconsertos no Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
                  title="Sigam no Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <span className="text-xs font-bold text-slate-300">@virtuanconsertos</span>
              </div>
            </div>
          </div>

          {/* Quick Info (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-900 pb-2">
              Contato & Suporte
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">(44) 98831-9357</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                <button onClick={handleWhatsAppClick} className="hover:text-white text-left font-bold text-[#25D366] transition-colors">
                  Falar no WhatsApp
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                <a
                  href="https://instagram.com/virtuanconsertos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium transition-colors"
                >
                  @virtuanconsertos
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a
                  href="mailto:virtuanconsertos@gmail.com"
                  className="hover:text-white font-medium transition-colors"
                >
                  virtuanconsertos@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage / Service Areas (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-900 pb-2">
              Regiões Atendidas
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento especializado com suporte de transporte e logística nas seguintes cidades do Paraná:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {coverageAreas.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300 hover:text-yellow-400 hover:border-yellow-400/30 transition-all cursor-default"
                >
                  <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                  {city}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright & secure stamps */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-slate-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Virtuan Consertos. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
