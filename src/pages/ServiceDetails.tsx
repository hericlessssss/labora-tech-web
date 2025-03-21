import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../components/Services';
import { ArrowLeft, Check } from 'lucide-react';

type Plan = {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
};

type ServiceDetail = {
  title: string;
  description: string;
  longDescription: string[];
  examples: string[];
  applications: string[];
  plans: Plan[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  websites: {
    title: 'Design e Desenvolvimento de Websites',
    description: 'Criação de websites excepcionais que convertem visitantes em clientes.',
    longDescription: [
      'Desenvolvemos websites profissionais e responsivos que não apenas impressionam visualmente, mas também geram resultados reais para seu negócio.',
      'Nossa equipe combina design moderno com as melhores práticas de desenvolvimento para criar uma presença online única e eficaz.',
      'Focamos em performance, SEO e experiência do usuário para garantir que seu site se destaque da concorrência.'
    ],
    examples: [
      'Sites institucionais',
      'Landing pages',
      'Blogs corporativos',
      'Portfólios',
      'Sites de eventos'
    ],
    applications: [
      'Empresas que precisam de uma presença online profissional',
      'Profissionais liberais que desejam mostrar seu trabalho',
      'Startups que precisam lançar seu MVP',
      'Eventos e conferências',
      'Organizações sem fins lucrativos'
    ],
    plans: [
      {
        name: 'Básico',
        price: 2997,
        features: [
          'Até 5 páginas',
          'Design responsivo',
          'Formulário de contato',
          'Otimização básica para SEO',
          'Integração com redes sociais',
          '3 meses de suporte',
          'Hospedagem inclusa',
          'Certificado SSL'
        ]
      },
      {
        name: 'Profissional',
        price: 4997,
        recommended: true,
        features: [
          'Até 10 páginas',
          'Design responsivo premium',
          'Blog integrado',
          'Otimização avançada para SEO',
          'Integração com Google Analytics',
          'Painel administrativo',
          '6 meses de suporte',
          'Treinamento da equipe',
          'Chat online',
          'Múltiplos idiomas'
        ]
      },
      {
        name: 'Enterprise',
        price: 7997,
        features: [
          'Páginas ilimitadas',
          'Design personalizado exclusivo',
          'Blog avançado com categorias',
          'SEO completo',
          'Integração com CRM',
          'Painel administrativo customizado',
          '12 meses de suporte',
          'Consultoria estratégica',
          'Hospedagem premium incluída',
          'Integrações personalizadas',
          'Área de membros'
        ]
      }
    ]
  },
  ecommerce: {
    title: 'E-commerce',
    description: 'Desenvolvimento de lojas virtuais completas e personalizadas.',
    longDescription: [
      'Criamos lojas virtuais completas e personalizadas que transformam visitantes em clientes satisfeitos.',
      'Nossa solução inclui todos os recursos necessários para gerenciar seu negócio online de forma eficiente.',
      'Focamos em usabilidade e conversão para maximizar suas vendas online.'
    ],
    examples: [
      'Lojas virtuais completas',
      'Marketplaces',
      'Lojas integradas com ERP',
      'Sistemas de assinatura',
      'Dropshipping'
    ],
    applications: [
      'Varejistas que querem expandir para o digital',
      'Marcas que desejam vender diretamente ao consumidor',
      'Empreendedores iniciando no e-commerce',
      'Indústrias que querem vender B2B',
      'Artistas e criadores de conteúdo'
    ],
    plans: [
      {
        name: 'Starter',
        price: 4997,
        features: [
          'Até 100 produtos',
          'Gestão de estoque básica',
          'Pagamento via PIX e cartão',
          'Cálculo de frete automático',
          'Relatórios básicos',
          '3 meses de suporte',
          'Certificado SSL',
          'Cupons de desconto'
        ]
      },
      {
        name: 'Business',
        price: 7997,
        recommended: true,
        features: [
          'Até 1000 produtos',
          'Gestão de estoque avançada',
          'Múltiplos meios de pagamento',
          'Integração com marketplaces',
          'Relatórios avançados',
          'Automação de marketing',
          '6 meses de suporte',
          'Treinamento da equipe',
          'Multimoeda',
          'Programa de fidelidade'
        ]
      },
      {
        name: 'Enterprise',
        price: 12997,
        features: [
          'Produtos ilimitados',
          'Gestão multi-lojas',
          'Gateway de pagamento personalizado',
          'Integração com ERP',
          'Business Intelligence',
          'Marketing automation premium',
          '12 meses de suporte',
          'Consultoria estratégica',
          'Infraestrutura dedicada',
          'API personalizada',
          'Vendas B2B'
        ]
      }
    ]
  },
  webapps: {
    title: 'Aplicações Web',
    description: 'Desenvolvimento de aplicações web robustas e escaláveis.',
    longDescription: [
      'Desenvolvemos aplicações web sob medida que atendem às necessidades específicas do seu negócio.',
      'Utilizamos tecnologias modernas e as melhores práticas de desenvolvimento para garantir qualidade e performance.',
      'Focamos em criar soluções escaláveis e de fácil manutenção.'
    ],
    examples: [
      'Sistemas de gestão empresarial',
      'Plataformas de ensino',
      'Dashboards analíticos',
      'CRMs personalizados',
      'Intranets corporativas'
    ],
    applications: [
      'Empresas que precisam automatizar processos',
      'Instituições de ensino',
      'Startups com produtos digitais',
      'Empresas que precisam de dashboards personalizados',
      'Organizações com necessidades específicas de software'
    ],
    plans: [
      {
        name: 'Básico',
        price: 9997,
        features: [
          'Até 5 módulos',
          'Autenticação de usuários',
          'Dashboard básico',
          'Relatórios essenciais',
          'API REST',
          '3 meses de suporte',
          'Treinamento básico',
          'Hospedagem cloud'
        ]
      },
      {
        name: 'Avançado',
        price: 14997,
        recommended: true,
        features: [
          'Até 10 módulos',
          'Autenticação avançada',
          'Dashboards interativos',
          'Relatórios customizados',
          'API REST completa',
          '6 meses de suporte',
          'Treinamento completo',
          'Integração com terceiros',
          'Backup automático',
          'Monitoramento 24/7'
        ]
      },
      {
        name: 'Enterprise',
        price: 24997,
        features: [
          'Módulos ilimitados',
          'SSO e autenticação personalizada',
          'Business Intelligence',
          'Relatórios avançados',
          'API GraphQL',
          '12 meses de suporte',
          'Consultoria técnica',
          'Integrações ilimitadas',
          'Infraestrutura dedicada',
          'SLA garantido',
          'Código fonte incluído'
        ]
      }
    ]
  },
  seo: {
    title: 'SEO',
    description: 'Otimização para mecanismos de busca para melhorar sua visibilidade online.',
    longDescription: [
      'Desenvolvemos estratégias completas de SEO para aumentar sua visibilidade nos mecanismos de busca.',
      'Utilizamos técnicas avançadas e as melhores práticas para melhorar seu ranking orgânico.',
      'Focamos em resultados mensuráveis e crescimento sustentável do tráfego.'
    ],
    examples: [
      'Otimização on-page',
      'Link building',
      'SEO local',
      'SEO técnico',
      'Content marketing'
    ],
    applications: [
      'E-commerces que precisam aumentar vendas orgânicas',
      'Blogs que querem aumentar tráfego',
      'Empresas locais que precisam ser encontradas',
      'Sites de notícias e conteúdo',
      'Startups que precisam ganhar visibilidade'
    ],
    plans: [
      {
        name: 'Essencial',
        price: 997,
        features: [
          'Análise inicial do site',
          'Otimização on-page básica',
          'Pesquisa de palavras-chave',
          'Relatório mensal',
          'Otimização de meta tags',
          '3 páginas otimizadas',
          'Google Search Console',
          'Google Analytics'
        ]
      },
      {
        name: 'Profissional',
        price: 1997,
        recommended: true,
        features: [
          'Análise completa do site',
          'Otimização on-page avançada',
          'Estratégia de palavras-chave',
          'Relatórios semanais',
          'Link building básico',
          '10 páginas otimizadas',
          'SEO local',
          'Otimização de imagens',
          'Monitoramento de rankings',
          'Auditoria técnica'
        ]
      },
      {
        name: 'Enterprise',
        price: 3997,
        features: [
          'Estratégia personalizada',
          'Otimização completa do site',
          'Link building avançado',
          'Relatórios personalizados',
          'SEO internacional',
          'Páginas ilimitadas',
          'Content marketing',
          'Consultoria dedicada',
          'Análise de concorrentes',
          'SEO para e-commerce',
          'Integrações avançadas'
        ]
      }
    ]
  },
  marketing: {
    title: 'Marketing Digital',
    description: 'Estratégias completas de marketing digital para aumentar sua presença online.',
    longDescription: [
      'Desenvolvemos estratégias personalizadas de marketing digital para alcançar seus objetivos de negócio.',
      'Utilizamos uma abordagem data-driven para otimizar campanhas e maximizar o ROI.',
      'Focamos em criar uma presença digital forte e consistente para sua marca.'
    ],
    examples: [
      'Google Ads',
      'Facebook Ads',
      'Email Marketing',
      'Marketing de Conteúdo',
      'Inbound Marketing'
    ],
    applications: [
      'Empresas que querem aumentar vendas online',
      'Negócios que precisam gerar leads',
      'Marcas que querem fortalecer presença digital',
      'Startups que precisam escalar',
      'E-commerces que querem aumentar conversão'
    ],
    plans: [
      {
        name: 'Starter',
        price: 1497,
        features: [
          'Gestão de 2 redes sociais',
          'Criação de conteúdo básico',
          'Email marketing básico',
          'Google Ads básico',
          'Relatórios mensais',
          '4 posts por semana',
          'Stories diários',
          'Suporte por email'
        ]
      },
      {
        name: 'Growth',
        price: 2997,
        recommended: true,
        features: [
          'Gestão de 4 redes sociais',
          'Criação de conteúdo premium',
          'Email marketing avançado',
          'Google Ads completo',
          'Facebook Ads',
          '8 posts por semana',
          'Stories ilimitados',
          'Relatórios semanais',
          'Suporte prioritário',
          'Estratégia personalizada'
        ]
      },
      {
        name: 'Enterprise',
        price: 5997,
        features: [
          'Gestão de todas as redes',
          'Conteúdo personalizado',
          'Marketing automation',
          'Campanhas multiplataforma',
          'Estratégia omnichannel',
          'Posts ilimitados',
          'Produção de vídeos',
          'Consultoria estratégica',
          'Relatórios personalizados',
          'Equipe dedicada',
          'ROI garantido'
        ]
      }
    ]
  },
  social: {
    title: 'Marketing em Mídias Sociais',
    description: 'Gestão profissional de redes sociais para conectar sua marca com seu público.',
    longDescription: [
      'Desenvolvemos estratégias de mídia social que fortalecem sua marca e engajam seu público-alvo.',
      'Criamos conteúdo relevante e de alta qualidade para cada plataforma social.',
      'Focamos em construir uma comunidade engajada e gerar resultados mensuráveis.'
    ],
    examples: [
      'Instagram',
      'Facebook',
      'LinkedIn',
      'TikTok',
      'YouTube'
    ],
    applications: [
      'Marcas que querem fortalecer presença nas redes',
      'Influenciadores digitais',
      'E-commerces que vendem via social',
      'Empresas B2B no LinkedIn',
      'Negócios locais'
    ],
    plans: [
      {
        name: 'Básico',
        price: 997,
        features: [
          '2 redes sociais',
          '12 posts mensais',
          'Stories 3x por semana',
          'Design básico',
          'Relatório mensal',
          'Moderação de comentários',
          'Calendário editorial',
          'Hashtags otimizadas'
        ]
      },
      {
        name: 'Profissional',
        price: 1997,
        recommended: true,
        features: [
          '4 redes sociais',
          '20 posts mensais',
          'Stories diários',
          'Design premium',
          'Reels/TikToks',
          'Relatório quinzenal',
          'Gestão de comunidade',
          'Calendário editorial',
          'Análise de concorrentes',
          'Estratégia personalizada'
        ]
      },
      {
        name: 'Enterprise',
        price: 3997,
        features: [
          'Redes sociais ilimitadas',
          'Posts ilimitados',
          'Stories ilimitados',
          'Design exclusivo',
          'Produção de vídeos',
          'Gestão de influencers',
          'Relatórios semanais',
          'Estratégia omnichannel',
          'Social ads inclusos',
          'Equipe dedicada',
          'Consultoria VIP'
        ]
      }
    ]
  },
  design: {
    title: 'UX/UI Design',
    description: 'Design de interfaces intuitivas e atraentes que fortalecem sua marca.',
    longDescription: [
      'Criamos experiências digitais excepcionais que encantam seus usuários e fortalecem sua marca.',
      'Utilizamos metodologias centradas no usuário para desenvolver interfaces intuitivas e eficientes.',
      'Focamos em criar designs que não apenas impressionam visualmente, mas também geram resultados.'
    ],
    examples: [
      'Design de websites',
      'Design de aplicativos',
      'Design systems',
      'Redesign de interfaces',
      'Prototipagem'
    ],
    applications: [
      'Startups que precisam de MVP',
      'Empresas que querem redesign',
      'Produtos digitais em desenvolvimento',
      'E-commerces que precisam melhorar conversão',
      'Aplicativos móveis'
    ],
    plans: [
      {
        name: 'Essencial',
        price: 4997,
        features: [
          'Até 5 telas',
          'Wireframes',
          'Design responsivo',
          'Guia de estilos',
          'Protótipo básico',
          '1 revisão',
          'Arquivos fonte',
          'Handoff para dev'
        ]
      },
      {
        name: 'Profissional',
        price: 7997,
        recommended: true,
        features: [
          'Até 12 telas',
          'Wireframes detalhados',
          'Design responsivo',
          'Design system básico',
          'Protótipo interativo',
          '2 revisões',
          'Pesquisa de usuários',
          'Testes de usabilidade',
          'Documentação completa',
          'Suporte à implementação'
        ]
      },
      {
        name: 'Enterprise',
        price: 14997,
        features: [
          'Telas ilimitadas',
          'UX Research completo',
          'Design system completo',
          'Protótipo avançado',
          'Revisões ilimitadas',
          'Testes com usuários',
          'Análise de métricas',
          'Workshops de design',
          'Consultoria UX',
          'Documentação avançada',
          'Acompanhamento contínuo'
        ]
      }
    ]
  },
  support: {
    title: 'Assistência Técnica',
    description: 'Suporte técnico especializado para computadores e notebooks.',
    longDescription: [
      'Oferecemos suporte técnico profissional para manter seus equipamentos funcionando perfeitamente.',
      'Nossa equipe especializada resolve problemas de hardware e software com agilidade e eficiência.',
      'Focamos em soluções definitivas e prevenção de problemas futuros.'
    ],
    examples: [
      'Manutenção preventiva',
      'Reparo de hardware',
      'Instalação de software',
      'Backup de dados',
      'Remoção de vírus'
    ],
    applications: [
      'Empresas de todos os portes',
      'Profissionais autônomos',
      'Usuários domésticos',
      'Escolas e instituições',
      'Home office'
    ],
    plans: [
      {
        name: 'Básico',
        price: 197,
        features: [
          'Diagnóstico completo',
          'Limpeza básica',
          'Instalação de antivírus',
          'Atualização do sistema',
          'Backup básico',
          'Suporte remoto',
          'Relatório técnico',
          'Garantia de 30 dias'
        ]
      },
      {
        name: 'Completo',
        price: 397,
        recommended: true,
        features: [
          'Diagnóstico avançado',
          'Limpeza completa',
          'Otimização do sistema',
          'Backup completo',
          'Instalação de programas',
          'Suporte presencial',
          'Relatório detalhado',
          'Configuração de rede',
          'Garantia de 90 dias',
          'Checklist de manutenção'
        ]
      },
      {
        name: 'Empresarial',
        price: 997,
        features: [
          'Atendimento prioritário',
          'Manutenção preventiva',
          'Gestão de ativos',
          'Backup em nuvem',
          'Suporte 24/7',
          'Visitas mensais',
          'Relatórios gerenciais',
          'Consultoria técnica',
          'Garantia estendida',
          'SLA garantido',
          'Equipe dedicada'
        ]
      }
    ]
  },
  consulting: {
    title: 'Consultoria em T.I',
    description: 'Consultoria especializada para empresas de T.I.',
    longDescription: [
      'Oferecemos consultoria estratégica para ajudar sua empresa a tomar as melhores decisões em tecnologia.',
      'Nossa equipe de especialistas analisa seus processos e sugere melhorias baseadas em dados e melhores práticas.',
      'Focamos em soluções que trazem resultados mensuráveis e retorno sobre investimento.'
    ],
    examples: [
      'Transformação digital',
      'Arquitetura de sistemas',
      'Segurança da informação',
      'Gestão de projetos',
      'Cloud computing'
    ],
    applications: [
      'Empresas em transformação digital',
      'Startups em crescimento',
      'Empresas que precisam otimizar processos',
      'Organizações que buscam inovação',
      'Negócios que precisam escalar'
    ],
    plans: [
      {
        name: 'Inicial',
        price: 4997,
        features: [
          'Diagnóstico inicial',
          'Análise de processos',
          'Relatório de recomendações',
          '1 workshop mensal',
          'Suporte por email',
          '3 meses de acompanhamento',
          'Reuniões quinzenais',
          'KPIs básicos'
        ]
      },
      {
        name: 'Business',
        price: 9997,
        recommended: true,
        features: [
          'Diagnóstico completo',
          'Mapeamento de processos',
          'Plano estratégico',
          '2 workshops mensais',
          'Suporte prioritário',
          '6 meses de acompanhamento',
          'Reuniões semanais',
          'KPIs avançados',
          'Gestão de mudanças',
          'Treinamento da equipe'
        ]
      },
      {
        name: 'Enterprise',
        price: 19997,
        features: [
          'Consultoria personalizada',
          'Transformação digital',
          'Arquitetura empresarial',
          'Workshops ilimitados',
          'Suporte 24/7',
          '12 meses de acompanhamento',
          'Reuniões sob demanda',
          'Business Intelligence',
          'Gestão de inovação',
          'Mentoria executiva',
          'ROI garantido'
        ]
      }
    ]
  }
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}

function generateWhatsAppLink(plan: Plan, service: string): string {
  const message = encodeURIComponent(
    `Olá! Gostaria de mais informações sobre o plano ${plan.name} do serviço de ${service}. Valor: ${formatPrice(plan.price)}`
  );
  return `https://wa.me/5561998159297?text=${message}`;
}

export default function ServiceDetails() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId] : null;

  if (!service || !details) {
    return (
      <div className="min-h-screen bg-base text-white py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Serviço não encontrado</h1>
            <button
              onClick={() => navigate(-1)}
              className="btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base text-white py-24">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Voltar para serviços
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 font-poppins">{details.title}</h1>
          <p className="text-xl text-gray-400 mb-12">{details.description}</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 font-poppins">Sobre o Serviço</h2>
              <div className="space-y-4">
                {details.longDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-400">{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 font-poppins">Exemplos</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.examples.map((example, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <Check className="h-5 w-5 text-primary" />
                    {example}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 font-poppins">Aplicações</h2>
              <ul className="space-y-4">
                {details.applications.map((application, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <Check className="h-5 w-5 text-primary" />
                    {application}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-8 font-poppins">Nossos Planos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {details.plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`service-box flex flex-col min-h-[700px] ${
                      plan.recommended ? 'border-primary relative' : ''
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recomendado
                      </div>
                    )}
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold mb-2 font-poppins">{plan.name}</h3>
                      <div className="mb-6">
                        <p className="text-3xl font-bold text-white">{formatPrice(plan.price)}</p>
                        <p className="text-sm text-gray-400">
                          ou 12x de {formatPrice(plan.price / 12)}
                        </p>
                        <p className="text-sm text-gray-400">
                          {formatPrice(plan.price * 0.9)} à vista (10% desconto)
                        </p>
                      </div>
                      <ul className="space-y-3 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={generateWhatsAppLink(plan, details.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center block mt-6"
                      >
                        Escolher plano
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}