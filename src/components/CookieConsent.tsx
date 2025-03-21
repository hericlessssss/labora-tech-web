import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10 p-4 z-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-300 text-sm flex-grow">
            <p>
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, 
              você concorda com nossa{' '}
              <Link to="/politica-de-cookies" className="text-primary hover:text-primary/80">
                Política de Cookies
              </Link>{' '}
              e{' '}
              <Link to="/politica-de-privacidade" className="text-primary hover:text-primary/80">
                Política de Privacidade
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccept}
              className="btn-primary px-6 py-2 text-sm"
            >
              Aceitar
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}