import SmoothScroll from './components/layout/SmoothScroll';
import ScrollProgress from './components/layout/ScrollProgress';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Hero from './components/sections/Hero';
import OrganizersBar from './components/sections/OrganizersBar';
import Roadmap from './components/sections/Roadmap';
import Benefits from './components/sections/Benefits';
import B2B from './components/sections/B2B';
import VIP from './components/sections/VIP';
import Audience from './components/sections/Audience';
import Tariffs from './components/sections/Tariffs';
import Logistics from './components/sections/Logistics';
import Form from './components/sections/Form';
import Gala from './components/sections/Gala';
import WhyNow from './components/sections/WhyNow';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';

export default function App() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <OrganizersBar />
        <Roadmap />
        <Benefits />
        <B2B />
        <VIP />
        <Audience />
        <Tariffs />
        <Logistics />
        <Form />
        <Gala />
        <WhyNow />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
