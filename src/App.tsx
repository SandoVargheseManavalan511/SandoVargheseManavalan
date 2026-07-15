import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <>
    <SEO
        title="CyberShield Security | Cybersecurity Solutions"
        description="Protect your business with enterprise-grade cybersecurity services including penetration testing, SOC monitoring, cloud security and compliance."
        keywords="Cybersecurity, Penetration Testing, SOC, Cloud Security, Network Security"
        url="https://www.cybersecurityrecoveryagency.org"
        image="https://www.cybersecurityrecoveryagency.org/og-image.jpg"
      />
    <div className="relative min-h-screen bg-black">
      <CyberBackground />
      <Navbar />
      <main className="relative z-10 pt-[4.5rem]">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
