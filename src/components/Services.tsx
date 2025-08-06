import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LordIcon from './LordIcon';
import website from '../icons/wired-outline-12-layers-hover-squeeze.json';
import ecommerce from '../icons/wired-outline-146-trolley-hover-jump.json';
import webapp from '../icons/wired-outline-742-code-hover-pinch.json';
import seo from '../icons/wired-outline-19-magnifier-zoom-search-hover-spin.json';
import marketing from '../icons/wired-outline-134-target-hover-dynamic.json';
import social from '../icons/wired-outline-981-consultation-hover-conversation-alt.json';
import design from '../icons/wired-outline-1383-sphere-hover-pinch.json';
import support from '../icons/wired-outline-409-tool-hover-oscillate.json';
import consulting from '../icons/wired-outline-21-avatar-hover-looking-around.json';

export const services = [
  {
    id: 'websites',
    icon: website,
    title: 'Design de Websites',
    description: 'Criação de websites excepcionais que convertem visitantes em clientes, com foco em design moderno e experiência do usuário.',
  },
  {
    id: 'ecommerce',
    icon: ecommerce,
    title: 'E-commerce',
    description: 'Desenvolvimento de lojas virtuais completas e personalizadas para impulsionar suas vendas online.',
  },
  {
    id: 'webapps',
    icon: webapp,
    title: 'Aplicações Web',
    description: 'Desenvolvimento de aplicações web robustas e escaláveis, adaptadas às necessidades específicas do seu negócio.',
  },
  {
    id: 'consulting',
    icon: consulting,
    title: 'Consultoria em T.I',
    description: 'Consultoria especializada para empresas de T.I, ajudando a otimizar processos e aumentar a eficiência.',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-base text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 text-lg">
            Oferecemos uma gama completa de soluções digitais para impulsionar seu negócio no mundo online.
            Cada serviço é personalizado para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-box flex flex-col h-[360px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <LordIcon
                  icon={service.icon}
                  size={48}
                  trigger="hover"
                  colors="primary:#6a1b9a"
                  isHovered={hoveredIndex === index}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 flex-grow">
                {service.description}
              </p>
              <button
                onClick={() => navigate(`/servicos/${service.id}`)}
                className="btn-primary w-full mt-6"
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}