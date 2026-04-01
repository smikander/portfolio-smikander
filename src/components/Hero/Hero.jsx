import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src="https://via.placeholder.com/150" alt="Your Name" className="hero-image" />
      <h1 className="hero-title">Aspiring Web Developer</h1>
      <p className="hero-subtitle">I build beautiful and functional things for the web.</p>
    </section>
  );
};
export default Hero;