import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import FAQ from './components/FAQ';
import Tours from './components/Tours';



function App() {
  return (
   <div>
   <Header />
   <Home />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/FAQ" element={<FAQ />} />
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
