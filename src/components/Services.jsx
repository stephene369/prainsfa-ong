// import React, { useState } from 'react';

const Services = () => {
  // const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Éducation et Développement des Compétences",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      description: "Formation continue et accompagnement numérique",
      points: [
        "Formation aux outils numériques pour jeunes et adultes",
        "Plateformes d'e-learning et ressources digitales",
        "Sensibilisation familiale à la littératie numérique"
      ]
    },
    {
      title: "Santé Numérique",
      icon: "🏥",
      color: "from-green-500 to-emerald-500",
      description: "Digitalisation des services de santé",
      points: [
        // "Accès facilité aux dossiers médicaux",
        // "Télémédecine et suivi à distance",
        "Formation du personnel de santé aux outils numériques"
      ]
    },
    {
      title: "AgriTech et Sécurité Alimentaire",
      icon: "🌾",
      color: "from-yellow-500 to-orange-500",
      description: "Solutions numériques pour l'agriculture",
      points: [
        "Applications de gestion agricole et météorologique",
        "Plateformes de mise en relation producteurs-acheteurs",
        "Technologies adaptées (capteurs, drones, etc.)"
      ]
    },
    {
      title: "Entrepreneuriat et Innovation",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
      description: "Transformation digitale des entreprises",
      points: [
        "Accompagnement à la transition numérique",
        "Incubation et mentorat de startups",
        "Soutien à l'économie sociale et solidaire"
      ]
    },
    {
      title: "Écologie et Économie Circulaire",
      icon: "🌱",
      color: "from-green-600 to-teal-500",
      description: "Numérique responsable et durable",
      points: [
        "Sensibilisation à l'usage responsable des technologies",
        "Projets numériques verts et écologiques",
        "Partenariats pour la transition écologique"
      ]
    },
    {
      title: "Genre et Inclusivité",
      icon: "⚖️",
      color: "from-pink-500 to-rose-500",
      description: "Égalité d'accès aux technologies",
      points: [
        "Programmes d'encouragement pour femmes et filles",
        "Initiatives inclusives contre les discriminations",
        "Valorisation des parcours féminins dans le tech"
      ]
    },
    {
      title: "Gouvernance et Citoyenneté Numérique",
      icon: "🏛️",
      color: "from-indigo-500 to-blue-600",
      description: "Participation citoyenne et transparence",
      points: [
        "Plaidoyer pour des politiques publiques inclusives",
        // "Plateformes de Civic Tech",
        "Formation à la cybersécurité et protection des données"
      ]
    },
    {
      title: "Recherche, Évaluation et Diffusion",
      icon: "📊",
      color: "from-cyan-500 to-blue-500",
      description: "Études d'impact et capitalisation",
      points: [
        "Recherches sur les besoins et mesure d'efficacité",
        "Documentation et partage des bonnes pratiques",
        "Partenariats académiques et innovation méthodologique"
      ]
    },
    {
      title: "Éducation Financière et Inclusion Financière",
      icon: "💰",
      color: "from-amber-500 to-yellow-500",
      description: "Littératie financière et accès aux services",
      points: [
        "Sensibilisation financière pour tous les publics",
        "Facilitation d'accès aux services bancaires",
        "Innovation dans les services financiers numériques"
      ]
    }
  ];

  return (
    <section id="axes-stratégiques" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos 9 Axes Stratégiques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons l'Afrique à travers le numérique inclusif
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Rejoignez notre mission</h3>
            <p className="text-xl mb-6 opacity-90">
              Ensemble, construisons une Afrique numérique inclusive
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
