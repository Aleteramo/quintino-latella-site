import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import BMICalculator from './components/BMICalculator';
import './App.css';
import GoogleAnalytics from './components/GoogleAnalytics';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Services />
        <BMICalculator /> 
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;