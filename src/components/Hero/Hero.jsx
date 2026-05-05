import React from 'react';
import './Hero.css';
import profileImage from '../../assets/image.png';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <img src={profileImage} alt="Profile" className="hero-image" />
      <h1 className="hero-title">{t('hero.title')}</h1>
      <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
      <p className="hero-text">{t('hero.text')}</p>
        <hr/>
    </section>
  );
};
export default Hero;
