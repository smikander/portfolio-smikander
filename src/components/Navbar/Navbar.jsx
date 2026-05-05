import React, { use } from 'react';
import './Navbar.css';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import LanguageSwitcher from '../Languageswitcher/Languageswitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language); // Change to desired language
  }, []);

console.log('Current language:', i18n.language); // Debugging log
  return (
    <nav className="navbar">
      <span className="navbar-name">Sari Mikander</span>
      <div className="navbar-links">
        <a href="#hero">{t('navbar.hero')}</a>
        <a href="#skills">{t('navbar.skills')}</a>
        <a href="#projects">{t('navbar.projects')}</a>
        <a href="#contact">{t('navbar.contact')}</a>
      </div>
      <LanguageSwitcher />
    </nav>
  );
};
export default Navbar;