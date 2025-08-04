import React from 'react';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Institutions Internationales",
      partners: [
        {
          name: "Union Africaine",
          logo: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=200&h=100&fit=crop",
          description: "Partenariat stratégique pour l'Agenda 2063 et la transformation digitale",
          type: "Institutionnel",
          since: "2021"
        },
        {
          name: "Banque Mondiale",
          logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop",
          description: "Financement de projets d'inclusion financière numérique",
          type: "Financier",
          since: "2022"
        },
        {
          name: "UNESCO",
          logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=100&fit=crop",
          description: "Collaboration sur l'éducation numérique et la littératie",
          type: "Éducation",
          since: "2020"
        }
      ]
    },
    {
      title: "Entreprises Technologiques",
      partners: [
        {
          name: "Google.org",
          logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop",
          description: "Soutien aux initiatives d'IA pour le développement social",
          type: "Tech",
          since: "2023"
        },
        {
          name: "Microsoft for Nonprofits",
          logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop",
          description: "Fourniture d'outils cloud et de formation technique",
          type: "Tech",
          since: "2022"
        },
        {
          name: "Orange Foundation",
          logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
          description: "Déploiement de solutions de connectivité rurale",
          type: "Télécoms",
          since: "2021"
        }
      ]
    },
    {
      title: "Universités & Recherche",
      partners: [
        {
          name: "Université de Dakar",
          logo: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=200&h=100&fit=crop",
          description: "Programme de recherche en innovation sociale et numérique",
          type: "Académique",
          since: "2020"
        },
        {
          name: "MIT Center for Digital Business",
          logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop",
          description: "Échange de bonnes pratiques et formation des cadres",
          type: "Académique",
          since: "2023"
        },
        {
          name: "Institut de Recherche pour le Développement",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
          description: "Études d'impact et méthodologies d'évaluation",
          type: "Recherche",
          since: "2022"
        }
      ]
    },
    {
      title: "ONG & Société Civile",
      partners: [
        {
          name: "Médecins Sans Frontières",
          logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
          description: "Déploiement de solutions de télémédecine d'urgence",
          type: "Humanitaire",
          since: "2022"
        },
        {
          name: "Plan International",
          logo: "https://images.unsplash.com/photo-1594736797933-d0403ba1ab65?w=200&h=100&fit=crop",
          description: "Programmes d'autonomisation des filles par le numérique",
          type: "Développement",
          since: "2021"
        },
        {
          name: "Grameen Foundation",
          logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop",
          description: "Microfinance et inclusion financière numérique",
          type: "Microfinance",
          since: "2023"
        }
      ]
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      'Institutionnel': 'bg-blue-100 text-blue-700',
      'Financier': 'bg-green-100 text-green-700',
      'Éducation': 'bg-purple-100 text-purple-700',
      'Tech': 'bg-orange-100 text-orange-700',
      'Télécoms': 'bg-cyan-100 text-cyan-700',
      'Académique': 'bg-indigo-100 text-indigo-700',
      'Recherche': 'bg-pink-100 text-pink-700',
      'Humanitaire': 'bg-red-100 text-red-700',
      'Développement': 'bg-yellow-100 text-yellow-700',
      'Microfinance': 'bg-emerald-100 text-emerald-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  const stats = [
    { number: "25+", label: "Partenaires actifs", icon: "🤝" },
    { number: "15", label: "Pays représentés", icon: "🌍" },
    { number: "€50M", label: "Projets cofinancés", icon: "💰" },
    { number: "100K+", label: "Bénéficiaires indirects", icon: "👥" }
  ];

  return (
    <section id="partenaires" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Partenaires
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensemble, nous construisons un écosystème d'innovation numérique pour transformer l'Afrique
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partenaires par catégorie */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.partners.map((partner, partnerIndex) => (
                  <div 
                    key={partnerIndex}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
                    style={{animationDelay: `${(categoryIndex * 3 + partnerIndex) * 0.1}s`}}
                  >
                    {/* Logo */}
                    <div className="h-32 bg-gray-100 flex items-center justify-center p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800">
                          {partner.name}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(partner.type)}`}>
                          {partner.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {partner.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          📅 Depuis {partner.since}
                        </span>
                        <button className="text-primary-500 hover:text-primary-600 font-semibold">
                          En savoir plus →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Types de partenariats */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Types de Partenariats
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Partenariat Financier",
                icon: "💰",
                description: "Cofinancement de projets et programmes de développement",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Partenariat Technique",
                icon: "⚙️",
                description: "Expertise technique, formation et transfert de technologies",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Partenariat Académique",
                icon: "🎓",
                description: "Recherche collaborative et formation des capacités",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Partenariat Institutionnel",
                icon: "🏛️",
                description: "Plaidoyer conjoint et influence des politiques publiques",
                color: "from-orange-500 to-red-500"
              }
            ].map((type, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-3xl">{type.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {type.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Devenez notre partenaire</h3>
            <p className="text-xl mb-6 opacity-90">
              Rejoignez notre réseau de partenaires et participez à la transformation numérique de l'Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Proposer un partenariat
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

        {/* Témoignages de partenaires */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Ce que disent nos partenaires
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "PRAINSFA est un partenaire essentiel pour notre mission d'inclusion numérique en Afrique. Leur approche collaborative et leur expertise terrain font la différence.",
                author: "Dr. Marie Dubois",
                role: "Directrice Afrique, UNESCO",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
              },
              {
                quote: "Grâce à PRAINSFA, nous avons pu déployer nos solutions de télémédecine dans des zones reculées. Leur connaissance du terrain est inestimable.",
                author: "Prof. James Anderson",
                role: "Responsable Innovation, MSF",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
