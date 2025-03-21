import React, { useState } from 'react';
import LordIcon from './LordIcon';
import target from '../icons/wired-outline-134-target-hover-dynamic.json';
import users from '../icons/wired-outline-21-avatar-hover-looking-around.json';
import award from '../icons/wired-outline-12-layers-hover-squeeze.json';
import rocket from '../icons/wired-outline-742-code-hover-pinch.json';

const stats = [
  {
    icon: users,
    value: '500+',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: award,
    value: '50+',
    label: 'Prêmios Conquistados',
  },
  {
    icon: rocket,
    value: '1000+',
    label: 'Projetos Entregues',
  },
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredMission, setHoveredMission] = useState(false);

  return (
    <section id="about" className="py-24 bg-base text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden service-box">
              <img
                src="/imagem.png"
                alt="Equipe Labora Tech em reunião"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2">
              <p className="text-4xl font-bold font-poppins">10+</p>
              <p className="text-sm opacity-90">Anos de Experiência</p>
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-4xl font-bold mb-6 font-poppins text-white">
              Sobre a Labora Tech
            </h2>
            <p className="text-gray-400 mb-6">
              Desde 2013, a Labora Tech tem sido pioneira em soluções digitais inovadoras, 
              ajudando empresas a transformarem seus desafios em oportunidades de crescimento. 
              Nossa missão é impulsionar o sucesso dos nossos clientes através da tecnologia.
            </p>
            <p className="text-gray-400 mb-8">
              Com uma equipe altamente qualificada e apaixonada por tecnologia, 
              oferecemos soluções personalizadas que combinam criatividade, 
              inovação e excelência técnica para entregar resultados excepcionais.
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