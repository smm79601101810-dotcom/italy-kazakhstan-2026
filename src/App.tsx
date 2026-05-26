import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import OrganizersBar from './components/sections/OrganizersBar';
import Roadmap from './components/sections/Roadmap';
import SCF from './components/sections/SCF';
import Sponsors from './components/sections/Sponsors';

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
      </main>
    </>
  );
}
