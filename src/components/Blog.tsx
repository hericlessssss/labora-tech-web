import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  references: {
    title: string;
    url: string;
  }[];
  relatedImages: string[];
};

export const posts: BlogPost[] = [
  {
    id: 'design-system-revolucao-digital',
    title: 'Como o Design System pode revolucionar seu produto digital',
    excerpt: 'Descubra como um Design System bem estruturado pode melhorar a consistência, acelerar o desenvolvimento e reduzir custos em projetos digitais.',
    content: [
      'Um Design System é muito mais do que apenas uma biblioteca de componentes ou guia de estilo. É um produto vivo que serve produtos, composto por regras, restrições e princípios implementados em código e design.',
      'Quando bem implementado, um Design System pode trazer diversos benefícios para sua empresa:',
      '### Consistência Visual e Funcional',
      'A padronização de componentes, cores, tipografia e padrões de interação garante uma experiência consistente em todas as interfaces do produto. Isso fortalece a identidade da marca e melhora a usabilidade para os usuários.',
      '### Desenvolvimento Mais Rápido',
      'Com componentes reutilizáveis e documentação clara, as equipes de desenvolvimento podem construir novas features mais rapidamente, sem precisar "reinventar a roda" a cada projeto.',
      '### Melhor Colaboração',
      'Design Systems criam uma linguagem comum entre designers, desenvolvedores e stakeholders, facilitando a comunicação e reduzindo mal-entendidos durante o processo de desenvolvimento.',
      '### Manutenção Simplificada',
      'Alterações em componentes podem ser feitas de forma centralizada e propagadas automaticamente para todas as instâncias do produto, reduzindo o tempo e esforço necessários para manutenção.',
      '### Escalabilidade',
      'À medida que seu produto cresce, o Design System ajuda a manter a consistência e qualidade, mesmo com equipes distribuídas ou múltiplos produtos.',
      '### Como Implementar um Design System',
      '1. **Auditoria de Interface**: Analise seus produtos existentes para identificar padrões e inconsistências',
      '2. **Definição de Princípios**: Estabeleça os princípios fundamentais que guiarão as decisões de design',
      '3. **Criação de Tokens**: Defina as variáveis fundamentais como cores, tipografia e espaçamentos',
      '4. **Desenvolvimento de Componentes**: Crie componentes reutilizáveis e bem documentados',
      '5. **Documentação**: Mantenha uma documentação clara e atualizada',
      '6. **Governança**: Estabeleça processos para manutenção e evolução do sistema',
      'Um Design System bem implementado é um investimento que traz retornos significativos em termos de eficiência, qualidade e consistência do produto digital.'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    date: '10 Mar 2024',
    readTime: '5 min',
    category: 'Design',
    author: {
      name: 'Marina Silva',
      role: 'UX/UI Designer Senior',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    references: [
      {
        title: 'Design Systems Handbook',
        url: 'https://www.designbetter.co/design-systems-handbook'
      },
      {
        title: 'Atomic Design by Brad Frost',
        url: 'https://atomicdesign.bradfrost.com/'
      }
    ],
    relatedImages: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'tendencias-ecommerce-2024',
    title: 'Tendências de E-commerce para 2024',
    excerpt: 'As principais tendências que estão moldando o futuro do comércio eletrônico e como se preparar para aproveitar essas oportunidades.',
    content: [
      'O e-commerce continua evoluindo rapidamente, impulsionado por novas tecnologias e mudanças no comportamento do consumidor. Confira as principais tendências para 2024:',
      '### 1. Inteligência Artificial e Personalização',
      'A IA está revolucionando a experiência de compra online, oferecendo recomendações personalizadas, atendimento automatizado e análise preditiva de comportamento do consumidor.',
      '### 2. Realidade Aumentada e Virtual',
      'Tecnologias imersivas permitem que os consumidores "experimentem" produtos virtualmente antes da compra, reduzindo devoluções e aumentando a confiança na compra.',
      '### 3. Social Commerce',
      'A integração entre redes sociais e e-commerce continua crescendo, com novas funcionalidades de compra direta em plataformas como Instagram, TikTok e Pinterest.',
      '### 4. Sustentabilidade',
      'Consumidores estão cada vez mais conscientes do impacto ambiental de suas compras, valorizando empresas com práticas sustentáveis.',
      '### 5. Pagamentos Flexíveis',
      'Buy Now, Pay Later (BNPL) e outras opções de pagamento flexível continuam ganhando popularidade, especialmente entre consumidores mais jovens.',
      '### 6. Mobile First',
      'Com mais de 70% das compras online sendo realizadas via dispositivos móveis, ter uma experiência mobile excepcional é fundamental.',
      '### 7. Omnichannel',
      'A integração perfeita entre canais online e offline se torna cada vez mais importante, com opções como:',
      '- Click & Collect',
      '- Compra online, troca em loja',
      '- Estoque unificado',
      '### 8. Voice Commerce',
      'Compras por comando de voz através de assistentes virtuais devem crescer significativamente nos próximos anos.',
      '### Como se Preparar',
      '1. **Invista em Tecnologia**: Mantenha sua plataforma atualizada com as últimas inovações',
      '2. **Foque na Experiência**: Ofereça uma jornada de compra fluida e personalizada',
      '3. **Seja Sustentável**: Implemente práticas eco-friendly em sua operação',
      '4. **Integre Canais**: Desenvolva uma estratégia omnichannel efetiva',
      '5. **Analise Dados**: Use analytics para tomar decisões baseadas em dados'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    date: '05 Mar 2024',
    readTime: '4 min',
    category: 'E-commerce',
    author: {
      name: 'Pedro Santos',
      role: 'Especialista em E-commerce',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    references: [
      {
        title: 'E-commerce Trends 2024 - Forbes',
        url: 'https://www.forbes.com/retail'
      },
      {
        title: 'Future of Retail - McKinsey',
        url: 'https://www.mckinsey.com/industries/retail/our-insights'
      }
    ],
    relatedImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'ia-experiencia-usuario',
    title: 'Inteligência Artificial na Experiência do Usuário',
    excerpt: 'Como a IA está transformando a maneira como projetamos e desenvolvemos interfaces e experiências digitais mais inteligentes e personalizadas.',
    content: [
      'A Inteligência Artificial está revolucionando a forma como criamos e otimizamos experiências digitais. Veja como a IA está impactando o UX Design:',
      '### Personalização em Tempo Real',
      'A IA permite criar experiências verdadeiramente personalizadas, adaptando interfaces e conteúdo com base no comportamento, preferências e contexto do usuário em tempo real.',
      '### Análise Preditiva',
      'Algoritmos de machine learning podem prever as necessidades dos usuários e otimizar a jornada antes mesmo que problemas ocorram.',
      '### Chatbots e Assistentes Virtuais',
      'Assistentes alimentados por IA oferecem suporte 24/7, aprendendo continuamente para melhorar suas interações.',
      '### Design Generativo',
      'A IA pode gerar variações de design e testar diferentes abordagens automaticamente, acelerando o processo criativo.',
      '### Testes A/B Automatizados',
      'Sistemas de IA podem conduzir e analisar testes A/B em escala, identificando as melhores variações para diferentes segmentos de usuários.',
      '### Acessibilidade Aprimorada',
      'A IA ajuda a identificar e corrigir problemas de acessibilidade, tornando as interfaces mais inclusivas.',
      '### Aplicações Práticas',
      '1. **Recomendações Personalizadas**: Produtos, conteúdo e funcionalidades relevantes',
      '2. **Busca Inteligente**: Resultados mais precisos e contextuais',
      '3. **Formulários Adaptáveis**: Campos e validações que se ajustam ao usuário',
      '4. **Onboarding Personalizado**: Experiências iniciais otimizadas',
      '### Desafios e Considerações',
      '- **Privacidade**: Equilibrar personalização com proteção de dados',
      '- **Transparência**: Manter os usuários informados sobre o uso de IA',
      '- **Viés Algorítmico**: Garantir que a IA não perpetue preconceitos',
      '### O Futuro da IA em UX',
      'A integração entre IA e UX continuará evoluindo, com foco em:',
      '1. **Hiperpersonalização**: Experiências únicas para cada usuário',
      '2. **Interfaces Adaptativas**: Mudanças dinâmicas baseadas no contexto',
      '3. **Emoção e Empatia**: IA que compreende e responde a emoções',
      '4. **Design Automatizado**: Ferramentas de design potencializadas por IA'
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    date: '01 Mar 2024',
    readTime: '6 min',
    category: 'Tecnologia',
    author: {
      name: 'Lucas Oliveira',
      role: 'UX Research Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    },
    references: [
      {
        title: 'AI in UX Design - Nielsen Norman Group',
        url: 'https://www.nngroup.com/articles/ai-ux/'
      },
      {
        title: 'The Future of AI in Design - Smashing Magazine',
        url: 'https://www.smashingmagazine.com/category/artificial-intelligence'
      }
    ],
    relatedImages: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1675557009875-439d67ed8d8c?auto=format&fit=crop&q=80'
    ]
  }
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-24 bg-base text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Blog e Insights
          </h2>
          <p className="text-gray-400 text-lg">
            Fique por dentro das últimas tendências e novidades do mundo digital.
            Compartilhamos conhecimento para ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-poppins text-white line-clamp-2 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  Ler mais
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" className="btn-primary inline-flex items-center gap-2">
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}