import React from 'react';
import './Contact.css';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="contact">
      <h2>{t('contact.title')}</h2>
      <p>Email: <a href="mailto:sarimikander@msn.com">sarimikander@msn.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/sari-mikander-98369660/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sari-mikander</a></p>
    </footer>
  );
};
export default Contact;
