import React from 'react';

const About = () => {
  // const team = [
  //   {
  //     name: "Dr. Aminata KONE",
  //     role: "Directrice Générale",
  //     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  //     description: "Experte en transformation digitale avec 15 ans d'expérience en Afrique"
  //   },
  //   {
  //     name: "Prof. Ibrahim DIALLO",
  //     role: "Directeur Technique",
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  //     description: "Spécialiste en innovations technologiques et développement durable"
  //   },
  //   {
  //     name: "Fatou TRAORE",
  //     role: "Responsable Partenariats",
  //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  //     description: "Expert en coopération internationale et mobilisation de ressources"
  //   }
  // ];

  const timeline = [
    {
      year: "2020",
      title: "Fondation de PRAINSFA",
      description: "Création de l'association avec la vision d'un numérique inclusif pour l'Afrique"
    },
    {
      year: "2021",
      title: "Premiers projets pilotes",
      description: "Lancement de 5 projets dans l'éducation numérique et la santé digitale"
    },
    // {
    //   year: "2022",
    //   title: "Expansion régionale",
    //   description: "Extension des activités dans 3 pays ouest-africains"
    // },
    // {
    //   year: "2023",
    //   title: "Partenariats stratégiques",
    //   description: "Signature d'accords avec 15 institutions et organisations internationales"
    // },
    // {
    //   year: "2024",
    //   title: "Innovation et croissance",
    //   description: "Lancement de nouvelles initiatives en AgriTech et FinTech inclusives"
    // }
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À propos de PRAINSFA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
Passerelle de Recherche et Action sur 
l'inclusion Numérique Sociale  et Financière en Afrique 
(PRAINSFA) est une association engagée pour une Afrique plus 
équitable et inclusive grâce au numérique. Nous démocratisons 
l’accès aux technologies, développons les compétences digitales 
de tous les publics, et utilisons le numérique comme levier d’impact 
social. Nous intervenons aussi bien sur l’éducation, l'agriculture, la santé, l'inclusion genre, l'économie circulaire, l'écologie, l’entrepreneuriat, que la recherche, pour construire des écosystèmes numériques durables et ouverts à tous.
          
          </p>
        </div>

        {/* Mission, Vision, Valeurs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center animate-slide-up">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Mettre le numérique au service d'une Afrique plus équitable, plus juste, 
              plus solidaire et plus participative à travers des solutions innovantes.
            </p>
          </div>

          <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Une Afrique où chaque citoyen bénéficie des opportunités offertes par 
              le numérique pour améliorer sa qualité de vie et contribuer au développement.
            </p>
          </div>

          <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nos Valeurs</h3>
            <p className="text-gray-600 leading-relaxed">
              Inclusion, Innovation, Collaboration, Transparence, Durabilité et 
              Respect de la diversité culturelle africaine.
            </p>
          </div>
        </div>

        {/* Notre Histoire */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre Histoire</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-500">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-primary-500 rounded-full">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Équipe dirigeante */}
        {/* <div>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Équipe Dirigeante</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <div className="text-primary-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}


        {/* Chiffres clés */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 mt-20 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">PRAINSFA en chiffres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Bénéficiaires" },
              { number: "15+", label: "Projets réalisés" },
              // { number: "25+", label: "Partenaires" },
              { number: "8", label: "Pays d'intervention" }
            ].map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
