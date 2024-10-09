import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';import Projects from './components/Projects';




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
