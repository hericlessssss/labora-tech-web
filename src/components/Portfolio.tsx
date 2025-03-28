import React, { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Project = {
  title: string;
  description: string;
  images: string[];
  category: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Labora-Budget',
    description: "O 'Labora-Budget' é uma plataforma completa para controle de orçamentos, permitindo o gerenciamento de propostas aprovadas, em andamento e rejeitadas. O sistema possibilita a criação de orçamentos, cadastro de clientes, impressão de contratos para propostas aprovadas e conta com uma lista de tarefas no formato Kanban. Além disso, oferece um extrato mensal detalhado de orçamentos aprovados, facilitando a gestão financeira.",
    images: [
      '/public/BUDGET.png',
      '/public/BUDGET1.png',
      '/public/BUDGET2.png',
      '/public/BUDGET3.png',
      '/public/BUDGET4.png'
    ],
    category: 'Website',
    link: 'https://labora-budget.netlify.app/'
  },
  {
    title: 'Casei Web',
    description: "O 'Casei Web' é um site interativo para casamentos, oferecendo uma lista de presentes com sistema de reserva, funcionalidade de RSVP e um painel administrativo para gerenciamento dos presentes. Os noivos podem compartilhar o site com seus convidados, permitindo que eles deixem mensagens, escolham presentes e confirmem presença no evento. O site também facilita o acesso às localizações da igreja e do salão de festas, proporcionando uma experiência digital completa para a organização do casamento.",
    images: [
      '/public/Casei WEB.png',
      
    ],
    category: 'Website',
    link: 'https://hericles-bruna-vao-casar.netlify.app/'
  },
  {
    title: 'Ótica KB',
    description: "A landing page da 'Ótica KB' foi projetada para oferecer uma experiência premium e otimizada para conversões. O site conta com um slider de produtos, formulário de contato, seção de depoimentos e integração direta com o WhatsApp, permitindo que os clientes entrem em contato de forma rápida e prática. O design responsivo garante uma navegação fluida em qualquer dispositivo.",
    images: [
      '/public/Oticas KB.png'
      
    ],
    category: 'Website',
    link: 'https://oticaskb.com.br/'
  },
  {
    title: 'Quattro Promotora',
    description: "O site da 'Quattro Promotora' foi desenvolvido para oferecer assessoria especializada em consórcios, com atendimento personalizado via WhatsApp. A plataforma proporciona um layout moderno e intuitivo, garantindo fácil acesso às informações sobre os serviços oferecidos. Além disso, conta com páginas bem estruturadas de termos de uso e políticas de privacidade.",
    images: [
      '/public/Quattro.png'
      
    ],
    category: 'Website',
    link: 'https://quattropromotora-lp.netlify.app/'
  },
  {
    title: 'Vows4Ever - Orçamento de Casamento',
    description: "O 'Vows4Ever' é uma plataforma inovadora para o gerenciamento completo de casamentos, oferecendo diversas funcionalidades para facilitar o planejamento do grande dia. O sistema permite o controle de orçamentos, gerenciamento de fornecedores, calendário de eventos, galeria de inspirações e um sistema de tarefas Kanban. Com gráficos, relatórios financeiros e um painel interativo, o site proporciona uma experiência intuitiva e eficiente para os noivos organizarem todos os detalhes do casamento.",
    images: [
      '/public/vows4ever.png'
     
    ],
    category: 'Website',
    link: 'https://vows4ever.netlify.app/'
  },
  {
    title: 'Agrocampo',
    description: 'O site "Agro Campo Corrente" é especializado em produtos agropecuários. Eles oferecem uma ampla gama de produtos e serviços destinados ao setor agrícola, incluindo insumos agrícolas, rações, medicamentos veterinários e equipamentos. A empresa parece focada em atender às necessidades dos agricultores e pecuaristas, proporcionando soluções para melhorar a produtividade e eficiência no campo.',
    images: [
      '/public/AgroCampo.png'
     
    ],
    category: 'Website',
    link: 'https://agrocampocorrente.com.br/',
  },
  {
    title: 'Portal Piauí +Genética',
    description: 'O site "Piauí +Genética" é uma plataforma relacionada à genética na agropecuária. Ele parece oferecer informações e serviços para melhorar a qualidade genética de rebanhos e plantações através de tecnologia e inovação. Este site pode ser uma ferramenta útil para agricultores e pecuaristas interessados em aumentar a produtividade e a eficiência de suas operações usando métodos genéticos avançados.',
    images: [
      '/public/Piauí +Genética.png'
      
    ],
    category: 'Web App',
    link: 'https://maisgenetica.labora-tech.com',
  },
  {
    title: 'Jornal Tribuna - Portal de Notícias',
    description: 'O site "Jornal Tribuna" é um portal de notícias que oferece informações atualizadas e credíveis sobre diversos temas, incluindo política, economia, saúde, educação e mais. O foco do jornal é prover conteúdo informativo e relevante para seus leitores, mantendo-os informados sobre os principais acontecimentos.',
    images: [
      '/public/Jornal Tribuna.png'
     
    ],
    category: 'Web App',
    link: 'https://jornaltribuna.net',
  }
];

const categories = ['Todos', ...new Set(projects.map(project => project.category))];

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

type ModalProps = {
  project: Project;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when modal is closed
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-base border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold font-poppins text-white">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="relative aspect-video mb-6 bg-black/50 rounded-lg overflow-hidden">
            <img
              src={project.images[0]}
              alt={`${project.title} - Imagem principal`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm bg-white/10 text-white px-3 py-1 rounded-full">
                {project.category}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                Ver projeto
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <section id="portfolio" className="py-24 bg-base text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Nosso Portfólio
            </h2>
            <p className="text-gray-400 text-lg">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes.
              Cada projeto é único e desenvolvido com foco em resultados.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="service-box flex flex-col h-[500px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-video overflow-hidden mb-6 bg-black/50 rounded-lg">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    pagination={{ 
                      clickable: true,
                      dynamicBullets: true
                    }}
                    loop={true}
                    className="w-full h-full portfolio-swiper"
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={image}
                            alt={`${project.title} - Imagem ${imgIndex + 1}`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold font-poppins text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm bg-white/10 text-white px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">
                  {truncateText(project.description, 120)}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-white hover:text-white/80 transition-colors font-semibold"
                  >
                    Saiba mais
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    Ver projeto
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}