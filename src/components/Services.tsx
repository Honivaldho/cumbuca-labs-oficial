export default function Services() {
  const services = [
    {
      icon: "🎮",
      title: "Desenvolvimento de Jogos",
      description: "Criação de jogos independentes sob demanda com alta qualidade técnica e narrativa"
    },
    {
      icon: "🎨",
      title: "Consultoria em Game Design",
      description: "Orientação estratégica e consultoria em design de jogos e mecânicas inovadoras"
    },
    {
      icon: "🖼️",
      title: "Direção de Arte",
      description: "Desenvolvimento de identidade visual e direção artística completa para projetos"
    },
    {
      icon: "⚡",
      title: "Prototipagem Rápida",
      description: "MVPs de jogos e protótipos funcionais para validação de conceitos"
    },
    {
      icon: "🔧",
      title: "Otimização Técnica",
      description: "Otimização de performance e arquitetura técnica de projetos existentes"
    },
    {
      icon: "📚",
      title: "Mentoria & Treinamento",
      description: "Treinamento técnico e mentoria para equipes de desenvolvimento"
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-[#0A0A0A] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text">Serviços</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Soluções completas para seus projetos de games
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#00F0FF] mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-[#00F0FF]/20">
                <button className="text-[#39FF14] hover:text-[#00F0FF] transition text-sm font-semibold">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#00F0FF]/10 to-[#8A2BE2]/10 rounded-lg p-12 border border-[#00F0FF]/20 text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar seu projeto?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar a transformar sua ideia em realidade
          </p>
          <button className="btn-primary">Iniciar Conversa</button>
        </div>
      </div>
    </section>
  );
}
