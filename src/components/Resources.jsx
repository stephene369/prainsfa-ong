import React, { useState } from 'react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les ressources', icon: '📚' },
    { id: 'publications', name: 'Publications', icon: '📄' },
    { id: 'formation', name: 'Formation', icon: '🎓' },
    { id: 'outils', name: 'Outils', icon: '🛠️' },
    { id: 'recherche', name: 'Recherche', icon: '🔬' }
  ];

  const resources = [
    {
      id: 1,
      title: "Guide de l'Entrepreneur Numérique en Afrique",
      category: "publications",
      type: "PDF",
      size: "12 MB",
      description: "Manuel complet pour lancer et développer une startup tech en Afrique",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      downloads: 2500,
      date: "Janvier 2024",
      tags: ["Entrepreneuriat", "Startups", "Innovation"]
    },
    {
      id: 2,
      title: "Cours en ligne: Initiation à l'Intelligence Artificielle",
      category: "formation",
      type: "Vidéo",
      size: "4h 30min",
      description: "Formation gratuite sur les bases de l'IA et ses applications en Afrique",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      downloads: 1800,
      date: "Décembre 2023",
      tags: ["IA", "Formation", "Technologie"]
    },
    {
      id: 3,
      title: "Toolkit AgriTech: Solutions IoT pour l'agriculture",
      category: "outils",
      type: "Kit",
      size: "50 MB",
      description: "Ensemble d'outils et guides pour implémenter l'IoT dans l'agriculture",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
      downloads: 950,
      date: "Novembre 2023",
      tags: ["AgriTech", "IoT", "Agriculture"]
    },
    {
      id: 4,
      title: "Rapport: Impact du Numérique sur l'Inclusion Financière",
      category: "recherche",
      type: "PDF",
      size: "8 MB",
      description: "Étude approfondie sur l'effet des technologies financières en Afrique de l'Ouest",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      downloads: 3200,
      date: "Octobre 2023",
      tags: ["FinTech", "Inclusion", "Recherche"]
    },
    {
      id: 5,
      title: "Webinaire: Cybersécurité pour les PME africaines",
      category: "formation",
      type: "Vidéo",
      size: "2h 15min",
      description: "Session de formation sur les bonnes pratiques de sécurité numérique",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop",
      downloads: 1400,
      date: "Septembre 2023",
      tags: ["Cybersécurité", "PME", "Formation"]
    },
    {
      id: 6,
      title: "Infographies: Les femmes dans la tech en Afrique",
      category: "publications",
      type: "Images",
      size: "5 MB",
      description: "Collection d'infographies sur la participation féminine dans le secteur tech",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
      downloads: 2100,
      date: "Août 2023",
      tags: ["Genre", "Tech", "Statistiques"]
    },
    {
      id: 7,
      title: "Calculateur d'Impact Carbone Numérique",
      category: "outils",
      type: "Web App",
      size: "En ligne",
      description: "Outil pour mesurer et réduire l'empreinte carbone des activités numériques",
      image: "https://images.unsplash.com/photo-1569163139394-de44e885e7b7?w=300&h=200&fit=crop",
      downloads: 780,
      date: "Juillet 2023",
      tags: ["Écologie", "Numérique", "Calculateur"]
    },
    {
      id: 8,
      title: "Étude: TeleMed Impact Assessment 2023",
      category: "recherche",
      type: "PDF",
      size: "15 MB",
      description: "Évaluation complète de l'impact de notre programme de télémédecine",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
      downloads: 1600,
      date: "Juin 2023",
      tags: ["Télémédecine", "Santé", "Impact"]
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'PDF': return '📄';
      case 'Vidéo': return '🎥';
      case 'Kit': return '🧰';
      case 'Images': return '🖼️';
      case 'Web App': return '🌐';
      default: return '📁';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'PDF': return 'bg-red-100 text-red-700';
      case 'Vidéo': return 'bg-purple-100 text-purple-700';
      case 'Kit': return 'bg-blue-100 text-blue-700';
      case 'Images': return 'bg-green-100 text-green-700';
      case 'Web App': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="ressources" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ressources
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accédez à nos publications, outils de formation, kits pédagogiques et résultats de recherche
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher dans les ressources..."
              className="w-full px-6 py-4 pr-12 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:text-primary-500 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "50+", label: "Publications", icon: "📚" },
            { number: "25+", label: "Formations", icon: "🎓" },
            { number: "15+", label: "Outils", icon: "🛠️" },
            { number: "10K+", label: "Téléchargements", icon: "⬇️" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grille des ressources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map((resource, index) => (
            <div 
              key={resource.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)} {resource.type}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 text-sm line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {resource.description}
                </p>

                {/* Métadonnées */}
                <div className="space-y-1 mb-3 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>📏 {resource.size}</span>
                    <span>📅 {resource.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span>⬇️ {resource.downloads} téléchargements</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {resource.tags.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                      +{resource.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-2 px-3 rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300">
                    Télécharger
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-xs text-gray-600 hover:bg-gray-100 transition-colors">
                    Aperçu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Contribuez à nos ressources</h3>
            <p className="text-xl mb-6 opacity-90">
              Vous avez des ressources à partager ? Aidez-nous à enrichir notre bibliothèque
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Proposer une ressource
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
