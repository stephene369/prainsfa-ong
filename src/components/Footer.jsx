import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Mission', href: '#mission' },
    { name: 'Actions', href: '#actions' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Éducation Numérique',
    'Santé Digitale',
    'AgriTech',
    'Entrepreneuriat',
    'Écologie Numérique'
  ];

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">PRAINSFA</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Association dédiée à mettre le numérique au service d'une Afrique 
              plus équitable, plus juste, plus solidaire et plus participative.
            </p>
            <div className="flex space-x-4">
              {['📧', '📱', '💼', '🐦'].map((icon, index) => (
                <button
                  key={index}
                  onClick={() => alert('Lien à définir')}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label="Réseau social"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent-500 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PRAINSFA. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button onClick={() => alert('Politique de confidentialité')} className="hover:text-white transition-colors">
                Politique de confidentialité
              </button>
              <button onClick={() => alert('Conditions d’utilisation')} className="hover:text-white transition-colors">
                Conditions d'utilisation
              </button>
              <button onClick={() => alert('Mentions légales')} className="hover:text-white transition-colors">
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton retour haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="Retour en haut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
