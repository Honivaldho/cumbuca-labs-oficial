export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Projeto Alpha",
      description: "Uma aventura épica em um mundo fantástico",
      engine: "Unreal Engine 5",
      status: "Em Desenvolvimento",
      image: "🎮"
    },
    {
      id: 2,
      name: "Projeto Beta",
      description: "Puzzle game com mecânicas inovadoras",
      engine: "Unity",
      status: "Protótipo",
      image: "🧩"
    },
    {
      id: 3,
      name: "Projeto Gamma",
      description: "Experiência narrativa imersiva",
      engine: "Godot",
      status: "Lançado",
      image: "📖"
    },
    {
      id: 4,
      name: "Projeto Delta",
      description: "Jogo multiplayer competitivo",
      engine: "Unreal Engine 5",
      status: "Em Desenvolvimento",
      image: "⚔️"
    },
    {
      id: 5,
      name: "Projeto Epsilon",
      description: "Simulador estratégico em tempo real",
      engine: "Custom Engine",
      status: "Protótipo",
      image: "🎯"
    },
    {
      id: 6,
      name: "Projeto Zeta",
      description: "Jogo casual para mobile",
      engine: "Construct 3",
      status: "Lançado",
      image: "📱"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Lançado":
        return "text-[#39FF14]";
      case "Em Desenvolvimento":
        return "text-[#00F0FF]";
      case "Protótipo":
        return "text-[#8A2BE2]";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-slate-900 to-[#0A0A0A] py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text">Portfólio</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Conheça os projetos que estamos desenvolvendo e já lançamos
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card group cursor-pointer">
              <div className="text-6xl mb-4 group-hover:scale-110 transition transform">{project.image}</div>
              <h3 className="text-xl font-bold text-[#00F0FF] mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="space-y-2 pt-4 border-t border-[#00F0FF]/20">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Engine:</span>
                  <span className="text-[#39FF14]">{project.engine}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Status:</span>
                  <span className={getStatusColor(project.status)}>{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
