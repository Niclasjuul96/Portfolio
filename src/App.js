import React from 'react';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// designing website after: https://websitedemos.net/personal-portfolio-02/ 

function App() {
  return (
    <div className="App">
      <div className='whitespace-left'></div>
      
        <Router>
        <div className='Header'>
          <Header />
        </div> 
        <div className='whitespace-right'></div>
        <div className='body'>
          <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          
          </Routes>
        </div>
        <div className='Footer'>
          <Footer />
        </div>
          
        </Router>
    </div>
  );
}

export default App;
