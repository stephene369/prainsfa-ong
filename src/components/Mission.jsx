import React from 'react';

const Mission = () => {
  const stats = [
    { number: '9', label: 'Axes Stratégiques', icon: '🎯' },
    { number: '100+', label: 'Projets Soutenus', icon: '🚀' },
    { number: '50K+', label: 'Bénéficiaires', icon: '👥' },
    // { number: '25+', label: 'Partenaires', icon: '🤝' }
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'association PRAINSFA a pour objet de mettre le numérique au service 
            d'une Afrique plus équitable, plus juste, plus solidaire et plus participative.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg card-hover animate-slide-up">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Une Afrique où le numérique est un levier d'inclusion sociale, 
              de développement économique et de participation citoyenne.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg card-hover animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous développons des solutions numériques innovantes adaptées 
              aux réalités africaines et aux besoins locaux.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg card-hover animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous travaillons en partenariat avec les acteurs publics, 
              privés et la société civile pour maximiser notre impact.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
