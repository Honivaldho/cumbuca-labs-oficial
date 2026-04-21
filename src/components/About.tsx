const About = () => {
  const team = [
    { name: 'Onivaldo Pereira', role: 'Fundador & PM' },
    { name: 'Marlon Silva', role: 'Lead Developer' },
    { name: 'Natan Valladares', role: 'Art & Concept' },
  ];

  return (
    <section id="about" className="bg-[#0A0A0A] py-16 px-5 text-white border-t border-white/10">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#00F0FF] mb-10 drop-shadow-[0_0_18px_rgba(0,240,255,0.35)]">
        Nossa Equipe
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((m, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[#00F0FF]/15 bg-[#0F1115]/70 backdrop-blur-sm p-8 text-center hover:border-[#00F0FF]/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.10)] transition"
          >
            <h3 className="m-0 text-xl font-bold text-white">{m.name}</h3>
            <p className="text-[#00F0FF] text-sm mt-2">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
