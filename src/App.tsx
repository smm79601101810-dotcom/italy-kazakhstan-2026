import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
