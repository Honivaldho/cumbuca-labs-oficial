export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#00F0FF]/20 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Cumbuca Labs" className="h-8 w-8" />
              <span className="text-lg font-bold glow-text">CUMBUCA LABS</span>
            </div>
            <p className="text-gray-400 text-sm">
              A Brazilian game studio blending creativity, technology and culture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#00F0FF] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#00F0FF] transition text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#00F0FF] transition text-sm">Sobre</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-[#00F0FF] transition text-sm">Portfólio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#00F0FF] transition text-sm">Serviços</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#39FF14] font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#39FF14] transition text-sm">Game Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#39FF14] transition text-sm">Game Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#39FF14] transition text-sm">Art Direction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#39FF14] transition text-sm">Prototyping</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#8A2BE2] font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contato@cumbucalabs.com" className="text-gray-400 hover:text-[#8A2BE2] transition text-sm">contato@cumbucalabs.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition text-sm">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00F0FF]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Cumbuca Labs. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#00F0FF] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#00F0FF] transition">Terms of Service</a>
              <a href="#" className="hover:text-[#00F0FF] transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
