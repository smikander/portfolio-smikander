import React, { use } from 'react';
import './Navbar.css';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import LanguageSwitcher from '../Languageswitcher/Languageswitcher';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(navigator.language); // Change to desired language
  }, []);

//console.log('Current language:', i18n.language); // Debugging log
  const closeMenu = () => {
    setIsOpen(false);
  };
  document.addEventListener('mousedown', (event) => {
    if (!event.target.closest('.navbar')) {
      closeMenu();
    }
  });
  return (
    <nav className="navbar">
      <span className="navbar-name">Sari Mikander</span>
      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}  >
        <a href="#hero">{t('navbar.hero')}</a>
        <a href="#skills">{t('navbar.skills')}</a>
        <a href="#projects">{t('navbar.projects')}</a>
        <a href="#education">{t('navbar.education')}</a>
        <a href="#contact">{t('navbar.contact')}</a>
      </div>
      <LanguageSwitcher />
    </nav>
  );
};
export default Navbar;