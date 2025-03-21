import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/#about' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Portfólio', href: '/#portfolio' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contato', href: '/#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation with smooth scroll for homepage sections
  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (location.pathname !== '/' && href.startsWith('/#')) {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href.replace('/#', '#'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (href.startsWith('/#')) {
      const element = document.querySelector(href.replace('/#', '#'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-base/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-4" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <button
              onClick={() => handleNavigation('/')}
              className="-m-1.5 p-1.5"
            >
              <img
                src="/logo.png"
                alt="Labora Tech"
                className="h-8 w-auto"
              />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-semibold leading-6 text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => handleNavigation('/#contact')}
              className="btn-primary"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base px-6 py-6 sm:max-w-sm border-l border-white/10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavigation('/')}
              className="-m-1.5 p-1.5"
            >
              <img
                src="/logo.png"
                alt="Labora Tech"
                className="h-8 w-auto"
              />
            </button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-white/5 hover:text-white w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => handleNavigation('/#contact')}
                  className="btn-primary w-full text-center"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}