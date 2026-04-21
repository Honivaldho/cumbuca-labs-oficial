import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.jpg`;

  return (
    <div className="relative bg-[#0A0A0A] text-white min-h-screen overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
        <img
          src={logoSrc}
          alt=""
          aria-hidden="true"
          className="select-none w-[min(70vw,900px)] opacity-5 drop-shadow-[0_0_40px_rgba(0,240,255,0.10)]"
        />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
