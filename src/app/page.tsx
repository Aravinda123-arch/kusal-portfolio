import Navbar from '../components/Navbar';
import BackgroundCanvas from '../components/BackgroundCanvas';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 dark:bg-[#0a0c14] text-slate-100 flex flex-col selection:bg-violet-600/30 selection:text-white">
      {/* Dynamic ambient canvas */}
      <BackgroundCanvas />

      {/* Main navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
