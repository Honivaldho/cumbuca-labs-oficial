import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado pela mensagem! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-slate-900 to-[#0A0A0A] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text">Contato</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Vamos conversar sobre seu próximo projeto
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#00F0FF] mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-[#39FF14] text-2xl">📧</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">contato@cumbucalabs.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#00F0FF] text-2xl">💼</div>
                <div>
                  <h4 className="font-bold text-white mb-1">LinkedIn</h4>
                  <a href="#" className="text-[#00F0FF] hover:text-[#39FF14] transition">
                    linkedin.com/company/cumbuca-labs
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#8A2BE2] text-2xl">📱</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Instagram</h4>
                  <a href="#" className="text-[#00F0FF] hover:text-[#39FF14] transition">
                    @cumbucalabs
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-[#39FF14] text-2xl">💻</div>
                <div>
                  <h4 className="font-bold text-white mb-1">GitHub</h4>
                  <a href="#" className="text-[#00F0FF] hover:text-[#39FF14] transition">
                    github.com/cumbucalabs
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-[#00F0FF]/20">
              <h4 className="font-bold text-white mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00F0FF]/40 transition">
                  <span className="text-[#00F0FF]">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#8A2BE2]/20 rounded-lg flex items-center justify-center hover:bg-[#8A2BE2]/40 transition">
                  <span className="text-[#8A2BE2]">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#39FF14]/20 rounded-lg flex items-center justify-center hover:bg-[#39FF14]/40 transition">
                  <span className="text-[#39FF14]">gh</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#00F0FF] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-[#00F0FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#00F0FF] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-[#00F0FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#00F0FF] mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-[#00F0FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#00F0FF] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-[#00F0FF]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
