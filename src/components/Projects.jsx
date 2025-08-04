import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les projets', icon: '📊' },
    { id: 'education', name: 'Éducation', icon: '🎓' },
    { id: 'health', name: 'Santé', icon: '🏥' },
    { id: 'agritech', name: 'AgriTech', icon: '🌾' },
    { id: 'innovation', name: 'Innovation', icon: '🚀' }
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Skills for Youth",
      category: "education",
      status: "En cours",
      description: "Formation de 5000 jeunes aux compétences numériques dans 3 pays d'Afrique de l'Ouest",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      beneficiaries: "5,000 jeunes",
      duration: "2023-2025",
      partners: ["UNESCO", "Orange Foundation", "Gouvernement local"],
      impacts: [
        "85% des participants ont trouvé un emploi ou créé leur entreprise",
        "200 formateurs certifiés",
        "15 centres de formation équipés"
      ]
    },
    {
      id: 2,
      title: "TeleMed Africa",
      category: "health",
      status: "Terminé",
      description: "Plateforme de télémédecine connectant patients ruraux et médecins spécialistes",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      beneficiaries: "50,000 patients",
      duration: "2022-2023",
      partners: ["MSF", "Ministère de la Santé", "MTN"],
      impacts: [
        "75% de réduction des temps d'attente",
        "500 consultations par mois",
        "30 centres de santé connectés"
      ]
    },
    {
      id: 3,
      title: "Smart Farm Initiative",
      category: "agritech",
      status: "En cours",
      description: "Solutions IoT pour l'agriculture intelligente et durable",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
      beneficiaries: "2,000 agriculteurs",
      duration: "2024-2026",
      partners: ["FAO", "John Deere Foundation", "Coopératives locales"],
      impacts: [
        "40% d'augmentation des rendements",
        "30% d'économie d'eau",
        "100 capteurs IoT déployés"
      ]
    },
    {
      id: 4,
      title: "Women in Tech Accelerator",
      category: "innovation",
      status: "En cours",
      description: "Programme d'accélération pour startups dirigées par des femmes",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
      beneficiaries: "150 femmes entrepreneures",
      duration: "2024-2025",
      partners: ["UN Women", "Google.org", "Mastercard Foundation"],
      impacts: [
        "50 startups incubées",
        "€2M de financement levé",
        "200 emplois créés"
      ]
    },
    {
      id: 5,
      title: "Digital Literacy for All",
      category: "education",
      status: "Planifié",
      description: "Campagne nationale de littératie numérique pour tous les âges",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=250&fit=crop",
      beneficiaries: "100,000 citoyens",
      duration: "2025-2027",
      partners: ["Banque Mondiale", "Gouvernements nationaux"],
      impacts: [
        "Objectif: 80% de littératie numérique",
        "500 formateurs à certifier",
        "50 bibliothèques numériques"
      ]
    },
    {
      id: 6,
      title: "HealthTech Innovation Hub",
      category: "health",
      status: "Planifié",
      description: "Hub d'innovation pour les technologies de santé adaptées à l'Afrique",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      beneficiaries: "Secteur santé régional",
      duration: "2025-2028",
      partners: ["OMS", "Philips Foundation", "Universités locales"],
      impacts: [
        "20 innovations développées",
        "10 brevets déposés",
        "5 produits commercialisés"
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    switch(status) {
      case 'En cours': return 'bg-green-100 text-green-800';
      case 'Terminé': return 'bg-blue-100 text-blue-800';
      case 'Planifié': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos initiatives concrètes qui transforment les communautés à travers l'Afrique
          </p>
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
                  : 'bg-white text-gray-600 hover:text-primary-500 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Image du projet */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Informations clés */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">👥</span>
                    <span className="font-medium">Bénéficiaires:</span>
                    <span className="ml-1">{project.beneficiaries}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📅</span>
                    <span className="font-medium">Durée:</span>
                    <span className="ml-1">{project.duration}</span>
                  </div>
                </div>

                {/* Partenaires */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Partenaires:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.partners.slice(0, 2).map((partner, idx) => (
                      <span key={idx} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                        {partner}
                      </span>
                    ))}
                    {project.partners.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{project.partners.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Impacts clés */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Impacts clés:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.impacts.slice(0, 2).map((impact, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-500 mr-1">•</span>
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton d'action */}
                <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Vous avez un projet ?</h3>
            <p className="text-xl text-gray-600 mb-6">
              Rejoignez-nous pour transformer l'Afrique grâce au numérique inclusif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('rejoindre')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Proposer un projet
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
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

export default Projects;
