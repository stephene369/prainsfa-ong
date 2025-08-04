import React, { useState } from 'react';

const News = () => {
  const [activeTab, setActiveTab] = useState('actualites');

  const actualites = [
    {
      id: 1,
      title: "PRAINSFA remporte le Prix de l'Innovation Numérique Africaine 2024",
      excerpt: "Notre initiative en télémédecine a été reconnue comme la meilleure innovation de l'année par l'Union Africaine.",
      date: "15 Janvier 2024",
      category: "Prix & Reconnaissances",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Nouveau partenariat avec la Banque Mondiale pour l'inclusion financière",
      excerpt: "Un programme de 50M€ pour développer les services financiers numériques dans 8 pays africains.",
      date: "08 Janvier 2024",
      category: "Partenariats",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "Lancement du programme 'Women in AgriTech'",
      excerpt: "Initiative dédiée à l'autonomisation des femmes dans l'agriculture numérique en Afrique de l'Ouest.",
      date: "22 Décembre 2023",
      category: "Programmes",
      image: "https://images.unsplash.com/photo-1594736797933-d0403ba1ab65?w=400&h=250&fit=crop",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Rapport annuel 2023: 50,000 vies transformées",
      excerpt: "Bilan exceptionnel avec des impacts mesurables dans tous nos domaines d'intervention.",
      date: "15 Décembre 2023",
      category: "Rapports",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      readTime: "8 min"
    }
  ];

  const evenements = [
    {
      id: 1,
      title: "Africa Digital Summit 2024",
      date: "25-27 Mars 2024",
      location: "Kigali, Rwanda",
      type: "Conférence",
      description: "PRAINSFA participera en tant qu'orateur principal sur l'innovation inclusive",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      status: "À venir"
    },
    {
      id: 2,
      title: "Workshop: IA et Développement Durable",
      date: "15 Février 2024",
      location: "Dakar, Sénégal",
      type: "Formation",
      description: "Formation gratuite sur l'utilisation de l'IA pour le développement durable",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      status: "Inscriptions ouvertes"
    },
    {
      id: 3,
      title: "Hackathon HealthTech Africa",
      date: "05-07 Avril 2024",
      location: "Lagos, Nigeria",
      type: "Compétition",
      description: "48h pour développer des solutions de santé numérique innovantes",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      status: "À venir"
    }
  ];

  const temoignages = [
    {
      id: 1,
      name: "Mariam Coulibaly",
      role: "Agricultrice, Mali",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=100&h=100&fit=crop&crop=face",
      content: "Grâce au programme Smart Farm, mes récoltes ont augmenté de 60%. Les capteurs IoT m'aident à optimiser l'irrigation et je vends maintenant directement via l'application mobile.",
      project: "Smart Farm Initiative"
    },
    {
      id: 2,
      name: "Dr. Samuel Osei",
      role: "Médecin, Ghana",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      content: "La plateforme TeleMed Africa a révolutionné notre pratique. Nous pouvons maintenant consulter des spécialistes en temps réel et offrir de meilleurs soins à nos patients ruraux.",
      project: "TeleMed Africa"
    },
    {
      id: 3,
      name: "Fatima Diop",
      role: "Entrepreneur, Sénégal",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      content: "Le programme Women in Tech m'a donné les outils et la confiance pour lancer ma startup fintech. Aujourd'hui, nous servons plus de 10,000 clients.",
      project: "Women in Tech Accelerator"
    }
  ];

  const getContent = () => {
    switch(activeTab) {
      case 'actualites':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {actualites.map((article, index) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                    Lire la suite →
                  </button>
                </div>
              </article>
            ))}
          </div>
        );
      
      case 'evenements':
        return (
          <div className="space-y-6">
            {evenements.map((event, index) => (
              <div 
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.status === 'À venir' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="mr-2">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'temoignages':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <div 
                key={temoignage.id}
                className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={temoignage.image} 
                    alt={temoignage.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{temoignage.name}</h4>
                    <p className="text-gray-600 text-sm">{temoignage.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                  "{temoignage.content}"
                </blockquote>
                <div className="text-sm text-primary-600 font-semibold">
                  Projet: {temoignage.project}
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="actualités" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Actualités & Témoignages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez nos dernières actualités, événements et découvrez les témoignages de nos bénéficiaires
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'actualités', name: 'Actualités', icon: '📰' },
            { id: 'evenements', name: 'Événements', icon: '📅' },
            { id: 'temoignages', name: 'Témoignages', icon: '💬' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-primary-500 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {getContent()}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 mt-16 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Restez informé</h3>
          <p className="text-xl mb-6 opacity-90">
            Abonnez-vous à notre newsletter pour recevoir nos dernières actualités
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
