import React, { useState } from 'react';

const JoinUs = () => {
  const [activeTab, setActiveTab] = useState('benevole');

  const opportunities = {
    benevole: [
      {
        title: "Formateur en Compétences Numériques",
        type: "Bénévolat",
        duration: "3-6 mois",
        location: "Dakar, Sénégal",
        description: "Former les jeunes aux outils numériques de base et aux compétences digitales essentielles",
        requirements: ["Expérience en formation", "Maîtrise des outils numériques", "Français/Anglais"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop"
      },
      {
        title: "Développeur Web Volontaire",
        type: "Bénévolat",
        duration: "4-8 mois",
        location: "À distance",
        description: "Contribuer au développement de plateformes numériques pour l'éducation et la santé",
        requirements: ["React/Node.js", "Experience en développement", "Engagement long terme"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop"
      },
      {
        title: "Coordinateur de Projet AgriTech",
        type: "Bénévolat",
        duration: "6-12 mois",
        location: "Bamako, Mali",
        description: "Coordonner le déploiement de solutions IoT dans les communautés agricoles rurales",
        requirements: ["Gestion de projet", "Connaissance agriculture", "Mobilité géographique"],
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop"
      }
    ],
    stage: [
      {
        title: "Stage - Analyse de Données Santé",
        type: "Stage",
        duration: "3-6 mois",
        location: "Abidjan, Côte d'Ivoire",
        description: "Analyser les données d'impact de nos projets de télémédecine et santé numérique",
        requirements: ["Python/R", "Statistiques", "Étudiant M1/M2"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
      },
      {
        title: "Stage - Marketing Digital",
        type: "Stage",
        duration: "4-6 mois",
        location: "Casablanca, Maroc",
        description: "Développer la stratégie de communication digitale et gérer les réseaux sociaux",
        requirements: ["Marketing digital", "Créativité", "Maîtrise réseaux sociaux"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
      },
      {
        title: "Stage - Recherche en Innovation",
        type: "Stage",
        duration: "5-6 mois",
        location: "Kigali, Rwanda",
        description: "Étudier l'impact des technologies émergentes sur le développement socio-économique",
        requirements: ["Recherche académique", "Rédaction", "Anglais courant"],
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop"
      }
    ],
    projet: [
      {
        title: "Appel à Projets: FinTech Inclusive 2024",
        type: "Financement",
        duration: "12-24 mois",
        location: "Afrique de l'Ouest",
        description: "Financement jusqu'à 100K€ pour des projets de technologie financière inclusive",
        requirements: ["Startup/ONG", "Impact social mesurable", "Équipe expérimentée"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
      },
      {
        title: "Programme d'Incubation EdTech",
        type: "Incubation",
        duration: "6-12 mois",
        location: "Multi-pays",
        description: "Accompagnement complet pour startups dans l'éducation numérique",
        requirements: ["MVP développé", "Modèle économique viable", "Vision long terme"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop"
      },
      {
        title: "Concours Innovation Santé Digitale",
        type: "Concours",
        duration: "3 mois",
        location: "Continental",
        description: "Prix de 50K€ pour la meilleure innovation en santé numérique africaine",
        requirements: ["Solution innovante", "Preuve de concept", "Impact potentiel élevé"],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
      }
    ],
    don: [
      {
        title: "Soutien à l'Éducation Numérique",
        type: "Don",
        duration: "Ponctuel/Mensuel",
        location: "Tous projets",
        description: "Financez l'accès à l'éducation numérique pour 1000 jeunes défavorisés",
        requirements: ["25€ = 1 formation complète", "100€ = équipement d'un centre", "500€ = formation de formateurs"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop"
      },
      {
        title: "Urgence Connectivité Rurale",
        type: "Don",
        duration: "Campagne 2024",
        location: "Zones rurales",
        description: "Connecter 50 villages isolés d'Afrique aux services numériques essentiels",
        requirements: ["50€ = connexion 1 famille", "200€ = point d'accès communautaire", "1000€ = infrastructure village"],
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop"
      },
      {
        title: "Fonds Innovation Femmes",
        type: "Don",
        duration: "Permanent",
        location: "Pan-africain",
        description: "Soutenez l'entrepreneuriat féminin dans les technologies en Afrique",
        requirements: ["75€ = mentorat 1 femme", "300€ = formation complète", "1500€ = financement prototype"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop"
      }
    ]
  };

  const getTabContent = () => {
    const items = opportunities[activeTab] || [];
    
    if (activeTab === 'don') {
      return (
        <div className="space-y-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Options de don:</h4>
                    <div className="space-y-2">
                      {item.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <span className="mr-2">💝</span>
                          <span className="text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Faire un don
                    </button>
                    <button className="border-2 border-gray-300 text-gray-600 hover:border-primary-500 hover:text-primary-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.type}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">⏰</span>
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>{item.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Prérequis:</h4>
                <div className="space-y-1">
                  {item.requirements.slice(0, 2).map((req, idx) => (
                    <div key={idx} className="flex items-center text-gray-600 text-xs">
                      <span className="mr-1">•</span>
                      <span>{req}</span>
                    </div>
                  ))}
                  {item.requirements.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{item.requirements.length - 2} autres critères
                    </div>
                  )}
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                Postuler
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="rejoindre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Rejoignez-nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participez à la transformation numérique de l'Afrique. Plusieurs façons de contribuer à notre mission.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "200+", label: "Bénévoles actifs", icon: "👥" },
            { number: "50+", label: "Stagiaires formés", icon: "🎓" },
            { number: "30+", label: "Projets financés", icon: "🚀" },
            { number: "€2M", label: "Dons collectés", icon: "💰" }
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'benevole', name: 'Bénévolat', icon: '🤝' },
            { id: 'stage', name: 'Stages', icon: '🎓' },
            { id: 'projet', name: 'Projets', icon: '🚀' },
            { id: 'don', name: 'Dons', icon: '💝' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:text-primary-500 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {getTabContent()}
        </div>

        {/* Processus de candidature */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Comment nous rejoindre ?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Candidature",
                description: "Remplissez le formulaire en ligne avec votre motivation",
                icon: "📝"
              },
              {
                step: "2",
                title: "Sélection",
                description: "Notre équipe étudie votre profil et votre projet",
                icon: "🔍"
              },
              {
                step: "3",
                title: "Entretien",
                description: "Échange par visioconférence pour mieux vous connaître",
                icon: "💬"
              },
              {
                step: "4",
                title: "Intégration",
                description: "Formation et accompagnement pour réussir votre mission",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Prêt à faire la différence ?</h3>
            <p className="text-xl mb-6 opacity-90">
              Rejoignez une communauté engagée pour transformer l'Afrique par le numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Candidater maintenant
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Poser une question
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
