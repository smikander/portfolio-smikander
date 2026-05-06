import React from "react";
import './Languageswitcher.css';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next'; 
import { useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
    
  const changeLanguage = (lng) => {
    localStorage.setItem('i18nextLng', lng); // Store the selected language in localStorage
    window.location.reload(); // Reload the page to apply the new language
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage); // Change to the stored language on component mount
    }
  }, [i18n]);

  return (
    <div className="language-switcher">
        <button className="language-button" onClick={() => changeLanguage('en')}>EN</button>
        <button className="language-button" onClick={() => changeLanguage('fi')}>FI</button>
    </div>
  );
};

export default LanguageSwitcher;