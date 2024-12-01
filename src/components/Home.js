import React from 'react';
import heroImage from '../assets/hero-tourism02.png';
import '../styles/Home.css';
import TourCards from './TourCards';

const Home = () => {
  return ( 
  <div>
  <div className="hero">
  <img src={heroImage} alt="Landscape" />
  <h3>Discover the Enchantment of Costa Rica!</h3>
  </div>
  <TourCards />
  </div>
  );
};

export default Home;
