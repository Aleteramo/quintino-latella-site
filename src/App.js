import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Questionnaire from './components/Questionnaire';
import BMICalculatorPage from './components/BMICalculatorPage';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './components/BMICalculator.css';

const App = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
                {showQuestionnaire && (
                  <Questionnaire onClose={() => setShowQuestionnaire(false)} />
                )}
              </>
            } />
            <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
          </Routes>
        </main>
        <Footer />
        {!showQuestionnaire && (
          <button 
            className="questionnaire-button" 
            onClick={() => setShowQuestionnaire(true)}
          >
            Compila il questionario per un piano personalizzato
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;