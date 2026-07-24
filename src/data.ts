import { Service, Benefit, Differential, Step, Testimonial, GalleryItem, FAQItem } from './types';

export const WHATSAPP_NUMBER = '5544988319357'; // Custom premium number for conversion (44) 98831-9357
export const WHATSAPP_LINK_BASE = 'https://api.whatsapp.com/send/?phone=5544988319357';

export const getWhatsAppLink = (message?: string) => {
  const targetMessage = message || "Olá! Vim pelo site e gostaria de falar com a assistência Virtuan para solicitar uma manutenção.";
  return `${WHATSAPP_LINK_BASE}&text=${encodeURIComponent(targetMessage)}`;
};

export const trackWhatsAppConversion = (linkUrl?: string) => {
  if (typeof window !== 'undefined') {
    const win = window as any;
    // Push event to GTM dataLayer
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: 'whatsapp_click',
      event_category: 'Engagement',
      event_label: 'Botão WhatsApp',
      click_url: linkUrl || WHATSAPP_LINK_BASE
    });

    // Also trigger Google Ads conversion directly if gtag is present
    if (typeof win.gtag === 'function') {
      try {
        win.gtag('event', 'conversion', {
          'send_to': 'AW-18312189916'
        });
      } catch (err) {
        console.error('gtag conversion error', err);
      }
    }
  }
};

export const SERVICES: Service[] = [
  {
    id: 'moto-eletrica',
    title: 'Moto Elétrica',
    category: 'motos',
    description: 'Diagnóstico eletrônico completo, manutenção de motor de cubo ou central, reparos de fiação e suspensão.',
    longDescription: 'Nossos especialistas cuidam da sua moto elétrica com ferramental de ponta. Realizamos testes de estresse em baterias de lítio, reprogramação de módulos controladores, substituição de pastilhas de freio regenerativo e reparo completo de motores elétricos, devolvendo a potência e segurança que você precisa nas ruas.',
    iconName: 'Bike',
    priceEstimate: 'A partir de R$ 120'
  },
  {
    id: 'patinete-eletrico',
    title: 'Patinete Elétrico',
    category: 'patinetes',
    description: 'Troca de pneus (sólido ou inflável), ajuste de freios, reforço de estrutura e troca de bateria.',
    longDescription: 'Manutenção rápida para patinetes Xiaomi, Segway e multimarcas. Resolvemos desde furos em pneus com a opção de conversão para pneus sólidos (anti-furo), até quebras de travas do guidão, trocas de pastilhas de freio, reparos na placa controladora e recondicionamento de baterias para recuperar a autonomia original.',
    iconName: 'Zap',
    priceEstimate: 'A partir de R$ 80'
  },
  {
    id: 'triciclo-eletrico',
    title: 'Triciclo Elétrico',
    category: 'triciclos',
    description: 'Manutenção de sistemas de tração, troca de baterias de chumbo/lítio e revisão de freio de estacionamento.',
    longDescription: 'Seja para lazer, mobilidade ou trabalho, garantimos que seu triciclo elétrico funcione com estabilidade máxima. Ajustamos o torque dos motores de tração, revisamos o sistema diferencial de rodas, realizamos a manutenção do sistema de ré e o balanceamento elétrico das baterias para máxima durabilidade.',
    iconName: 'ShieldAlert',
    priceEstimate: 'A partir de R$ 150'
  },
  {
    id: 'hoverboard',
    title: 'Hoverboard',
    category: 'hoverboards',
    description: 'Calibração de giroscópios, substituição de carcaças, conserto de placa-mãe e baterias.',
    longDescription: 'Seu hoverboard voltou a puxar para um lado ou parou de ligar? Nós calibramos o sensor giroscópio de alta precisão, substituímos carcaças quebradas por modelos reforçados, reparamos a placa lógica principal e instalamos baterias com células originais Samsung/LG com selo de proteção térmica.',
    iconName: 'Cpu',
    priceEstimate: 'A partir R$ 90'
  },
  {
    id: 'bicicleta-eletrica',
    title: 'Bicicleta Elétrica',
    category: 'bicicletas',
    description: 'Ajuste de sensores de pedal assistido (PAS), fiação oculta, freios hidráulicos e câmbio.',
    longDescription: 'Cuidamos da sua e-bike para que sua pedalada assistida seja suave e eficiente. Revisamos sensores de pedalada assistida (torque e cadência), realizamos o alinhamento de freios a disco hidráulicos com sangria, reforçamos conectores elétricos e oferecemos soluções de baterias embutidas ou externas.',
    iconName: 'Activity',
    priceEstimate: 'A partir de R$ 110'
  },
  {
    id: 'scooters-eletricas',
    title: 'Scooters Elétricas',
    category: 'scooters',
    description: 'Manutenção preventiva geral, troca de fluidos de freio, iluminação em LED e baterias extras.',
    longDescription: 'As scooters elétricas são veículos robustos que demandam revisões periódicas. Realizamos diagnósticos elétricos via scanner, reparamos painéis digitais, substituímos amortecedores, ajustamos freios combinados (CBS) e fazemos a instalação de baterias secundárias para dobrar sua autonomia de viagem.',
    iconName: 'Compass',
    priceEstimate: 'A partir de R$ 130'
  },
  {
    id: 'venda-veiculos',
    title: 'Venda de Veículos',
    category: 'vendas',
    description: 'Modelos selecionados, revisados e com garantia de fábrica Virtuan. Encontre o elétrico perfeito para você.',
    longDescription: 'Quer dar o próximo passo rumo à mobilidade do futuro? Oferecemos um catálogo exclusivo de motos, patinetes, e-bikes e scooters novas e semi-novas criteriosamente revisadas por nossos engenheiros. Compre com segurança, suporte pós-venda garantido e condições facilitadas de parcelamento.',
    iconName: 'TrendingUp',
    priceEstimate: 'Sob Consulta'
  },
  {
    id: 'pecas-acessorios',
    title: 'Peças e Acessórios',
    category: 'vendas',
    description: 'Baterias de alta capacidade, pneus reforçados, carregadores inteligentes e muito mais.',
    longDescription: 'Ampla variedade de peças originais e de alto rendimento. Dispomos de baterias de Lítio sob medida, carregadores rápidos com proteção contra sobrecarga, retrovisores tecnológicos, suportes antivibração para celular, pneus sólidos de última geração e pastilhas de freio sinterizadas de alta durabilidade.',
    iconName: 'Wrench',
    priceEstimate: 'Consulte Catálogo'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Diagnóstico Rápido',
    description: 'Descubra o problema exato do seu veículo em tempo recorde com scanners modernos.',
    iconName: 'Activity'
  },
  {
    id: 'b2',
    title: 'Técnicos Especializados',
    description: 'Profissionais certificados com treinamento específico em engenharia de veículos elétricos.',
    iconName: 'Users'
  },
  {
    id: 'b3',
    title: 'Garantia de 90 Dias',
    description: 'Todos os nossos serviços contam com garantia por escrito para sua total segurança.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'b4',
    title: 'Peças Originais',
    description: 'Trabalhamos apenas com peças de alta qualidade e baterias homologadas.',
    iconName: 'Cpu'
  },
  {
    id: 'b5',
    title: 'Atendimento Ágil',
    description: 'Comunicação transparente pelo WhatsApp, do orçamento até a entrega do veículo.',
    iconName: 'MessageSquare'
  },
  {
    id: 'b6',
    title: 'Orçamento Transparente',
    description: 'Preços justos, explicados nos mínimos detalhes antes do início de qualquer reparo.',
    iconName: 'FileText'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'd1',
    title: 'Laboratório de Baterias Próprio',
    description: 'Contamos com maquinário de ponta para solda ponto, balanceamento de células e regeneração de baterias de Lítio, garantindo a recuperação real da autonomia sem precisar gastar com uma bateria nova.',
    iconName: 'BatteryCharging'
  },
  {
    id: 'd2',
    title: 'Ferramental Bosch & Equipamentos Tesla',
    description: 'Não fazemos gambiarras. Utilizamos scanners de calibração eletrônica, osciloscópios digitais e ferramentas de precisão para garantir que o seu circuito elétrico opere na corrente ideal de fábrica.',
    iconName: 'Cpu'
  },
  {
    id: 'd3',
    title: 'Líder em Tráfego Seguro e Certificação ISO',
    description: 'Seguimos rígidos padrões de segurança no armazenamento de baterias de Lítio e descarte ecológico de resíduos metálicos e químicos, sendo referência em responsabilidade ambiental.',
    iconName: 'Leaf'
  },
  {
    id: 'd4',
    title: 'Agilidade Express com Retirada em Casa',
    description: 'Entendemos que o seu veículo elétrico é seu meio de transporte diário. Por isso, oferecemos opções de serviço expresso de retirada e entrega agendada diretamente na sua residência ou trabalho.',
    iconName: 'Truck'
  }
];

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Chame no WhatsApp',
    description: 'Clique em um de nossos botões e descreva rapidamente o sintoma ou modelo do seu veículo elétrico.'
  },
  {
    number: '02',
    title: 'Envie Fotos/Vídeos',
    description: 'Se possível, mande fotos ou um vídeo curto do problema. Nossa equipe técnica fará uma triagem preliminar imediata.'
  },
  {
    number: '03',
    title: 'Receba o Orçamento',
    description: 'Enviamos uma proposta clara e transparente contendo as peças necessárias e o tempo de execução previsto.'
  },
  {
    number: '04',
    title: 'Realizamos o Serviço',
    description: 'Após a sua aprovação, nossos técnicos especializados efetuam o conserto seguindo rigorosos protocolos de teste.'
  },
  {
    number: '05',
    title: 'Retire ou Receba em Casa',
    description: 'Pronto! Seu veículo é entregue higienizado, calibrado, testado em rampa e com certificado de garantia de 90 dias.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Roberto Alencar',
    role: 'Engenheiro de Software (Faria Lima)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Minha scooter elétrica parou de carregar do nada. Em outras oficinas queriam me cobrar uma fortuna por uma bateria nova. O pessoal da Virtuan identificou que era apenas um fio do BMS rompido. Resolveram rápido e com um preço muito justo! Ganharam um cliente fiel.',
    vehicle: 'Scooter Elétrica Chopper'
  },
  {
    id: 't2',
    name: 'Juliana Mendes',
    role: 'Designer Gráfica e Ciclista',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Faço o trajeto diário de e-bike até o escritório e ela começou a perder potência na subida. Na Virtuan, eles recalibraram o sensor de torque e trocaram as pastilhas de freio hidráulico. A bike parece nova, o atendimento via WhatsApp foi impecável do início ao fim.',
    vehicle: 'Bicicleta Elétrica Specialized'
  },
  {
    id: 't3',
    name: 'Carlos Eduardo',
    role: 'Estudante Universitário',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Meu patinete Xiaomi furava o pneu traseiro a cada duas semanas. Fui na oficina Virtuan e eles colocaram o pneu sólido anti-furo. Também deram um aperto na barra do guidão que estava balançando. Serviço excelente, feito na mesma tarde!',
    vehicle: 'Patinete Elétrico Xiaomi M365'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Manutenção de Scooter Chopper',
    category: 'Motos',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'g2',
    title: 'Laboratório de Teste de Lítio',
    category: 'Baterias',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'g3',
    title: 'Revisão de E-Bike Premium',
    category: 'E-Bikes',
    imageUrl: 'https://images.unsplash.com/photo-1605557626697-2e87166a88f9?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'g4',
    title: 'Troca de Pneus e Eletrônica',
    category: 'Patinetes',
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84befd6b0de8?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'g5',
    title: 'Diagnóstico Computadorizado',
    category: 'Tecnologia',
    imageUrl: 'https://images.unsplash.com/photo-1621259182978-f09e5e2b07ae?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'g6',
    title: 'Montagem de Células Novas',
    category: 'Baterias',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto tempo demora para fazer o diagnóstico e o conserto?',
    answer: 'Nossos diagnósticos expressos costumam ser enviados em até 24 horas. Reparos comuns como troca de pneus de patinete, pastilhas de freio e fiação simples são resolvidos no mesmo dia. Serviços de recondicionamento de bateria ou placas podem levar de 2 a 5 dias úteis devido aos testes de ciclo de carga obrigatórios.'
  },
  {
    id: 'faq-2',
    question: 'Os serviços da Virtuan possuem garantia?',
    answer: 'Sim, absolutamente! Todos os serviços realizados pela Virtuan Consertos possuem garantia de 90 dias por escrito, cobrindo tanto as peças substituídas quanto a mão de obra especializada. Sua tranquilidade é nossa prioridade.'
  },
  {
    id: 'faq-3',
    question: 'Vocês vendem peças de reposição separadamente?',
    answer: 'Sim! Possuímos um amplo catálogo de peças originais e de alto rendimento, como carregadores inteligentes, pneus maciços, manetes de freio, pastilhas de cerâmica e baterias de Lítio montadas sob medida com células premium Samsung/LG.'
  },
  {
    id: 'faq-4',
    question: 'Vocês atendem outras cidades ou fazem retirada do veículo?',
    answer: 'Atendemos presencialmente em nossa sede com laboratório completo. Para maior comodidade, possuímos o serviço de Retirada e Entrega Expressa (consulte taxas para sua região). Caso você resida em outra cidade, pode nos enviar a bateria ou a placa lógica via Correios para reparo especializado.'
  },
  {
    id: 'faq-5',
    question: 'Com quais marcas de veículos elétricos vocês trabalham?',
    answer: 'Trabalhamos com praticamente todas as marcas líderes e importados do mercado, incluindo Xiaomi, Segway-Ninebot, Foston, Watts, Voltz, Gloov, Shineray, Two Dogs, Bosch, Specialized, Trek, Scott, e muitas outras marcas nacionais e importadas.'
  },
  {
    id: 'faq-6',
    question: 'Vocês parcelam o valor dos serviços ou veículos?',
    answer: 'Sim, facilitamos o seu pagamento! Parcelamos serviços e peças em até 10x sem juros no cartão de crédito, ou com descontos especiais para pagamento via Pix.'
  }
];
