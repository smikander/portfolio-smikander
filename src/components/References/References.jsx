import React from 'react';
import './References.css';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next';

const References = () => {
  const { t } = useTranslation();
  return (
    <section id="references" className="references">
      <h2 className="references-title">{t('references.title')}</h2>
      <div className="references-grid">
        <div className="reference-card">
          <h3 className="reference-title">{t('references.References on request')}</h3>
        </div>
      </div>
    </section>
  );
};
export default References;
