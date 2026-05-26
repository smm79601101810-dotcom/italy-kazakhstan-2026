import SmoothScroll from './components/layout/SmoothScroll';
import ScrollProgress from './components/layout/ScrollProgress';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import OrganizersBar from './components/sections/OrganizersBar';
import Roadmap from './components/sections/Roadmap';
import SCF from './components/sections/SCF';
import Sponsors from './components/sections/Sponsors';
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
        <SCF />
        <Sponsors />
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
    </SmoothScroll>
  );
}
