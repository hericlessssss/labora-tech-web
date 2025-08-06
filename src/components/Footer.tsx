import React from 'react';
import { Code2, Instagram, Facebook, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const quickLinks = [
  { name: 'Início', href: '/#hero' },
  { name: 'Sobre Nós', href: '/#about' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Portfólio', href: '/#portfolio' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contato', href: '/#contact' },
];

const services = [
  { name: 'Desenvolvimento Web', href: '/servicos/websites' },
  { name: 'E-commerce', href: '/servicos/ecommerce' },
  { name: 'Aplicações Web', href: '/servicos/webapps' },
  { name: 'Consultoria', href: '/servicos/consulting' },
];

const legal = [
  { name: 'Termos de Uso', href: '/termos-de-uso' },
  { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { name: 'Política de Cookies', href: '/politica-de-cookies' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      // Se estamos em uma página diferente da home, navegar para home primeiro
      if (window.location.pathname !== '/') {
        navigate('/');
        // Aguardar um momento para a página carregar antes de fazer scroll
        setTimeout(() => {
          const sectionId = href.substring(2); // Remove '/#'
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Se já estamos na home, fazer scroll direto
        const sectionId = href.substring(2); // Remove '/#'
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Para links normais, usar navegação padrão
      navigate(href);
    }
  };

  return (
    <footer className="bg-base text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="text-primary h-8 w-8" />
              <span className="font-poppins font-bold text-xl">Labora Tech</span>
            </Link>
            <p className="text-gray-400">
              Transformando ideias em soluções digitais inovadoras desde 2013. 
              Comprometidos com a excelência e resultados excepcionais para nossos clientes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/labora_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/laboratech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/laboratech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/laboratech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong className="text-white">Horário de Atendimento:</strong>
                <br />
                Segunda a Sexta: 09:00 - 18:00
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Contato:</strong>
                <br />
                +55 (61) 99815-9297
                <br />
                laborad.sign@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.href, e)}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Nossos Serviços</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber as últimas novidades, dicas e atualizações.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="btn-primary w-full">
                Inscrever-se
              </button>
            </form>
            <div className="mt-6">
              <h3 className="font-poppins font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Labora Tech. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              Feito por Labora Tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}