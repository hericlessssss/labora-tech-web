import React, { useState } from 'react';
import LordIcon from './LordIcon';
import target from '../icons/wired-outline-134-target-hover-dynamic.json';


const stats = [
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredMission, setHoveredMission] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(false);

  return (
    <section id="about" className="py-24 bg-base text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <img
            src="/Imagem para o site.jpg"
            alt="Equipe Labora Tech em reunião"
            className="w-full h-full aspect-square rounded-2xl object-cover transition-all duration-300 group-hover:scale-105 ease-in-out border-2 border-transparent hover:border-primary"
            onMouseEnter={() => setHoveredImage(true)}
            onMouseLeave={() => setHoveredImage(false)}
          />
        </div>
        
          <div className="lg:pl-12">
            <h2 className="text-4xl font-bold mb-6 font-poppins text-white">
              Sobre a Labora Tech
            </h2>
            <p className="text-gray-400 mb-6">
             A Labora Tech nasce com o propósito de transformar desafios em oportunidades por meio de soluções digitais inovadoras. 
             Nossa missão é impulsionar o crescimento de empresas que acreditam na tecnologia como aliada estratégica para alcançar o sucesso.
            </p>
            <p className="text-gray-400 mb-8">
              Nossa equipe, formada por profissionais qualificados e movidos pela paixão por tecnologia, 
              desenvolve soluções sob medida que integram criatividade, inovação e rigor técnico para entregar 
              resultados de alto impacto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center service-box !bg-transparent hover:!scale-110"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LordIcon
                      icon={stat.icon}
                      size={40}
                      trigger="hover"
                      colors="primary:#6a1b9a"
                      isHovered={hoveredIndex === index}
                    />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1 font-poppins">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div 
                className="flex items-start gap-4 service-box !bg-transparent hover:!scale-105"
                onMouseEnter={() => setHoveredMission(true)}
                onMouseLeave={() => setHoveredMission(false)}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LordIcon
                    icon={target}
                    size={40}
                    trigger="hover"
                    colors="primary:#6a1b9a"
                    isHovered={hoveredMission}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins text-white">Nossa Missão</h3>
                  <p className="text-gray-400">
                    Transformar ideias em soluções digitais inovadoras que impulsionem 
                    o crescimento e o sucesso dos nossos clientes, sempre com excelência 
                    e compromisso com resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}