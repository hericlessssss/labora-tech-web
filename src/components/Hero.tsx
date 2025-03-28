import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href.replace('/#', '#'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative isolate pt-24 bg-base text-white">
     <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl ">
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rotate-[30deg] bg-gradient-to-tr from-primary to-tertiary opacity-20 blur-3xl"
          style={{
            animation: 'movingBackground 50s ease-in-out infinite, heartBeat 3s ease-in-out infinite',
            clipPath: 'circle(0% at 50% 50%)',
          }}
        />
      </div>

      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Transformando ideias em soluções digitais
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Desenvolvemos soluções tecnológicas personalizadas para impulsionar seu negócio. 
            Da concepção à implementação, estamos aqui para transformar sua visão em realidade.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => handleNavigation('/#contact')}
              className="btn-primary flex items-center gap-2"
            >
              Comece agora
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleNavigation('/#services')}
              className="text-sm font-semibold leading-6 text-gray-400 hover:text-primary transition-colors"
            >
              Saiba mais <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}