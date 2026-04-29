import React from 'react';
import './Hero.css';
import profileImage from '../../assets/image.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src={profileImage} alt="Profile" className="hero-image" />
      <h1 className="hero-title">Frontend-focused developer evolving into fullstack</h1>
      <h2 className="hero-subtitle">I enjoy coding and solving problems.</h2>
      <p className="hero-text">I’m a frontend-focused developer with 5 years of experience building ecommerce solutions with Adobe Commerce (Magento).
        I enjoy creating accessible, user-friendly interfaces and solving complex problems in both modern and legacy systems. I'd like to gain more 
        backend experience and become a fullstack developer.
        
        Experienced in working across the development lifecycle, including release and deployment processes.</p>
        <hr/>
    </section>
  );
};
export default Hero;
