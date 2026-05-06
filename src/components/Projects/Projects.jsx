import React from 'react';
import './Projects.css';
import '../../i18n'; // Import i18n configuration
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">{t('projects.Ecommerce Platform Customizations and Improvements')}</h3> 
        
          <p className="project-description">{t('projects.Worked on various customizations and improvements for an ecommerce platform built with Adobe Commerce (Magento). This included optimizing performance, enhancing user experience, and implementing new features to meet business requirements.')}</p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
