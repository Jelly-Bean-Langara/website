import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Fourth from './components/Fourth';
import Hero from './components/Hero';
import Proposal from './components/Proposal';
import Second from './components/Second';
import Third from './components/Third';

function App() {
  return (
    <div className="App">
      <Hero />
      <Second />
      <Third />
      <Contact />
      <Proposal />
      <Fourth />
      <Footer />
    </div>
  );
}

export default App;
