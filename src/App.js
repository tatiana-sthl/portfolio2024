import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
import Projects from './pages/Projects';
import Stack from './pages/Stack';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className='globalposition'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
