import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import News from './components/News';
import Resources from './components/Resources';
import Partners from './components/Partners';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Projects /> */}
        {/* <News /> */}
        {/* <Resources /> */}
        {/* <Partners /> */}
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
