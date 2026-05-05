import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translations.json';
import fiTranslations from './locales/fi/translations.json';

i18n
  .use(initReactI18next)
  .init({
    debug: true,    
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslations       
      },
      fi: {
        translation: fiTranslations     
      },
    },
    
  });

  export default i18n;