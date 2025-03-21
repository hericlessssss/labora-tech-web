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
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-tertiary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
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