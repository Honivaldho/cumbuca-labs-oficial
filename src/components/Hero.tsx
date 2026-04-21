const Hero = () => {
  const logoSrc = `${import.meta.env.BASE_URL}logo.jpg`;

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-[#0A0A0A] px-5 py-16"
    >
      <img
        src={logoSrc}
        alt="Cumbuca Labs"
        className="w-full max-w-[280px] mx-auto mb-6 drop-shadow-[0_0_10px_rgba(0,240,255,0.35)]"
      />
      <h1 className="m-0 text-[2.6rem] sm:text-[3.2rem] md:text-[3.5rem] font-black tracking-[-0.02em] text-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">
        CUMBUCA LABS
      </h1>
      <p className="text-gray-300 text-base sm:text-lg mt-4 max-w-[520px] leading-relaxed">
        Estúdio Independente de Games. Criando universos digitais com alma brasileira.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <button
          type="button"
          className="btn-primary"
        >
          Nossos Jogos
        </button>
      </div>
    </section>
  );
};
export default Hero;
