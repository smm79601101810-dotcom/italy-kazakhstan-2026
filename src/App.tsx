import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import OrganizersBar from './components/sections/OrganizersBar';
import Roadmap from './components/sections/Roadmap';
import SCF from './components/sections/SCF';
import Sponsors from './components/sections/Sponsors';
import B2B from './components/sections/B2B';
import VIP from './components/sections/VIP';
import Audience from './components/sections/Audience';
import Tariffs from './components/sections/Tariffs';

export default function App() {
  return (
    <>
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
      </main>
    </>
  );
}
