import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo.jpg`;

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#00F0FF]/20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logoSrc} alt="Cumbuca Labs" className="h-12 w-12" />
          <span className="text-xl font-bold glow-text">CUMBUCA LABS</span>
        </div>

        <button
          className="md:hidden text-[#00F0FF]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 bg-[#0A0A0A]/95 md:bg-transparent p-6 md:p-0 border-b md:border-0 border-[#00F0FF]/20`}>
          <li><a href="#home" className="text-white hover:text-[#00F0FF] transition">Home</a></li>
          <li><a href="#about" className="text-white hover:text-[#00F0FF] transition">Sobre</a></li>
          <li><a href="#portfolio" className="text-white hover:text-[#00F0FF] transition">Portfólio</a></li>
          <li><a href="#services" className="text-white hover:text-[#00F0FF] transition">Serviços</a></li>
          <li><a href="#contact" className="text-white hover:text-[#00F0FF] transition">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
