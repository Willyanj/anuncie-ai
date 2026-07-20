import { useState, ChangeEvent, FormEvent } from 'react';
import { X, ShieldCheck, Clock, Check, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string | null;
}

export default function BudgetModal({ isOpen, onClose, preselectedServiceId }: BudgetModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: preselectedServiceId || 'patinete-eletrico',
    brand: '',
    issue: 'bateria-fraca',
    details: ''
  });

  const vehicleOptions = [
    { id: 'moto-eletrica', label: 'Moto Elétrica' },
    { id: 'patinete-eletrico', label: 'Patinete Elétrico' },
    { id: 'triciclo-eletrico', label: 'Triciclo Elétrico' },
    { id: 'hoverboard', label: 'Hoverboard' },
    { id: 'bicicleta-eletrica', label: 'Bicicleta Elétrica' },
    { id: 'scooters-eletricas', label: 'Scooters Elétrica' },
    { id: 'outro', label: 'Outro Veículo Elétrico' }
  ];

  const issueOptions = [
    { id: 'bateria-fraca', label: 'Bateria descarrega rápido / Não liga' },
    { id: 'pneu-furado', label: 'Pneu furado ou danificado' },
    { id: 'motor-falhando', label: 'Motor perdeu força ou faz barulho' },
    { id: 'freio-ruim', label: 'Freio fraco ou travando' },
    { id: 'revisao-preventiva', label: 'Revisão geral / Manutenção preventiva' },
    { id: 'placa-danificada', label: 'Falha no painel ou placa principal' },
    { id: 'outros-problemas', label: 'Outro problema técnico' }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getSymptomText = () => {
    return issueOptions.find(o => o.id === formData.issue)?.label || 'Problema geral';
  };

  const getVehicleText = () => {
    return vehicleOptions.find(o => o.id === formData.vehicleType)?.label || 'Veículo Elétrico';
  };

  // Generate real-time custom technical diagnosis text
  const getPreDiagnosis = () => {
    switch (formData.issue) {
      case 'bateria-fraca':
        return {
          title: 'Análise de Autonomia & Ciclo de Lítio',
          desc: 'Seu veículo passará por testes em nosso analisador de células de bateria de Lítio de alta tensão. Vamos medir a resistência interna de cada série de células para identificar células mortas ou desbalanceadas antes de sugerir a troca.',
          duration: 'Diagnóstico em até 24h úteis'
        };
      case 'pneu-furado':
        return {
          title: 'Substituição de Pneu Sólido ou Reforçado',
          desc: 'Recomendamos a conversão para pneus maciços anti-furo de última geração ou substituição por câmaras de ar reforçadas com líquido selante de Kevlar, que impede novos esvaziamentos.',
          duration: 'Execução expressa: 1h a 3h úteis'
        };
      case 'motor-falhando':
        return {
          title: 'Varredura de Sensores Hall & Bobinagem',
          desc: 'Realizaremos o escaneamento do motor de cubo utilizando osciloscópio digital para diagnosticar falhas nos sensores Hall, curto na fiação do estator de cobre ou desmagnetização interna.',
          duration: 'Diagnóstico em até 24h úteis'
        };
      case 'freio-ruim':
        return {
          title: 'Ajuste Hidráulico & Regeneração Eletrônica',
          desc: 'Iremos avaliar a espessura das pastilhas sinterizadas, efetuar a sangria do fluido mineral e calibrar o acionamento eletrônico de freio regenerativo (E-ABS) para frenagem segura em descidas.',
          duration: 'Execução expressa: 2h úteis'
        };
      case 'revisao-preventiva':
        return {
          title: 'Revisão Técnica Multiponto (Checklist 25 Itens)',
          desc: 'Faremos o reaperto técnico estrutural de todos os parafusos do chassi, lubrificação de rolamentos blindados, teste de isolamento elétrico contra umidade e higienização profunda das conexões de energia.',
          duration: 'Entrega em até 4h úteis'
        };
      default:
        return {
          title: 'Triagem Eletrônica Especializada',
          desc: 'Iniciaremos uma varredura completa da fiação e calibração de sinais de barramento do controlador principal. Nossos técnicos desmontarão os módulos sensíveis para testar de ponta a ponta na rampa de testes.',
          duration: 'Diagnóstico em até 24h úteis'
        };
    }
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha seu nome e telefone.');
      return;
    }
    setStep(2);
  };

  const handleSendWhatsApp = () => {
    const diag = getPreDiagnosis();
    const message = `Olá Virtuan! Acabei de fazer a triagem inteligente no site e gostaria de um orçamento detalhado:

👤 *DADOS DO CLIENTE*
- Nome: ${formData.name}
- Contato: ${formData.phone}

🚲 *DADOS DO VEÍCULO*
- Tipo: ${getVehicleText()}
- Marca/Modelo: ${formData.brand || 'Não informado'}

🛠️ *SINTOMAS E SOLICITAÇÃO*
- Sintoma: ${getSymptomText()}
- Detalhes Extras: ${formData.details || 'Sem observações'}

🔬 *RECOMENDAÇÃO PRÉ-DIAGNÓSTICO*
- Plano: ${diag.title}
- Estimativa: ${diag.duration}`;

    const link = getWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  const preDiag = getPreDiagnosis();

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Dark overlay backdrop with spring scale effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#060a12]/80 backdrop-blur-sm"
      />

      {/* Modal Dialog Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl z-10"
      >
        {/* Color stripe accent at the top */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          
          {/* Header Title */}
          <div className="mb-6">
            <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-widest bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/40">
              Orçamento Inteligente
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-3">
              Simulador Virtuan Consertos
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {step === 1 ? 'Preencha os dados básicos de triagem para gerar seu pré-diagnóstico.' : 'Confira o pré-diagnóstico gerado pelos nossos sistemas.'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              // Step 1: Form Inputs
              <motion.form
                key="step-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={handleNext}
                className="space-y-4"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-slate-900 border border-slate-850 focus:border-blue-500 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* WhatsApp Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    WhatsApp para Resposta *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full bg-slate-900 border border-slate-850 focus:border-blue-500 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Two Column Grid for Vehicle and Issue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vehicle Selector */}
                  <div>
                    <label htmlFor="vehicleType" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tipo de Equipamento
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-850 focus:border-blue-500 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      {vehicleOptions.map(opt => (
                        <option key={opt.id} value={opt.id}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Brand Input */}
                  <div>
                    <label htmlFor="brand" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Marca / Modelo (Opcional)
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="Ex: Xiaomi Pro 2, Watts"
                      className="w-full bg-slate-900 border border-slate-850 focus:border-blue-500 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Symptom/Issue Selector */}
                <div>
                  <label htmlFor="issue" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Principal Sintoma ou Serviço
                  </label>
                  <select
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-850 focus:border-blue-500 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none"
                  >
                    {issueOptions.map(opt => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Extra details text box */}
                <div>
                  <label htmlFor="details" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Detalhes Adicionais (Opcional)
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={2}
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Descreva se o veículo faz barulho, parou após pegar chuva, etc..."
                    className="w-full bg-slate-900 border border-slate-850 focus:border-blue-500 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Action button trigger step 2 */}
                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 px-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(37,211,102,0.25)]"
                >
                  <Cpu className="w-4.5 h-4.5 animate-spin-slow" />
                  Gerar Pré-Diagnóstico Técnico
                </button>
              </motion.form>
            ) : (
              // Step 2: Intelligent Pre-diagnosis display and WhatsApp redirection
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                {/* Resulting Diagnosis Box */}
                <div className="p-5 rounded-xl bg-blue-950/40 border border-blue-900/40 space-y-4">
                  <div className="flex items-center gap-2.5 text-blue-400">
                    <Cpu className="w-5 h-5 shrink-0 animate-pulse" />
                    <h4 className="font-extrabold text-sm sm:text-base tracking-tight uppercase">
                      {preDiag.title}
                    </h4>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {preDiag.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-3 border-t border-blue-900/30 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>{preDiag.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Peças homologadas</span>
                    </div>
                  </div>
                </div>

                {/* Summary points list of trust */}
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Nenhuma taxa cobrada na simulação de triagem</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ao falar com o técnico, confirme a reserva de peças</span>
                  </div>
                </div>

                {/* Navigation Back and Forward CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full sm:w-1/3 py-3 border border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-white font-semibold rounded-lg text-xs sm:text-sm transition-all"
                  >
                    Voltar / Editar
                  </button>
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-2/3 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5" />
                    Falar com Técnico no WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick legal secure badge */}
          <div className="mt-6 text-center text-[10px] text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>Seus dados são transmitidos com criptografia SSL segura.</span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
