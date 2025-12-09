import React from 'react';
import { Navbar } from './components/Navigation'; // Adjusted to pull from Navigation.jsx which exports Navbar
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ValueProp from './components/ValueProp';
import Symptoms from './components/Symptoms';
import CoreOffer from './components/CoreOffer';
import Transformation from './components/Transformation';
import Process from './components/Process';
import Proof from './components/Proof';
import { Footer } from './components/Navigation'; // Pulling Footer from same file

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-neon-blue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ValueProp />
        <Symptoms />
        <CoreOffer />
        <Transformation />
        <Process />
        <Proof />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
