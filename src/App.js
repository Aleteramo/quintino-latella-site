import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import BMICalculatorPage from './components/BMICalculatorPage';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './components/BMICalculator.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
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
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <Services />
              <Testimonials />
              <Contact />
            </Route>
            <Route path="/bmi-calculator" component={BMICalculatorPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;