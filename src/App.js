import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><About /><Speakers /><Schedule /><Partners /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        {/* Add routes for Schedule and Partners */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
