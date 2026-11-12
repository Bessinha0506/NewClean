import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Benefits />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
