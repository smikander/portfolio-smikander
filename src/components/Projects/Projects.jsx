
import React from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">{t('projects.title')}</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">
            {t('projects.ecommerce.title')}
          </h3>
          <p className="project-description">
            {t('projects.ecommerce.description')}
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-title">
            {t('projects.login.title')}
          </h3>
          <p className="project-description">
            {t('projects.login.description')}
          </p>
          <p className="project-technologies">
            Node.js · MySQL · REST API
          </p>
          <a
            href="https://github.com/smikander/login-project"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {t('projects.viewCode')}
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">
            {t('projects.apiDataFetcher.title')}
          </h3>
          <p className="project-description">
            {t('projects.apiDataFetcher.description')}
          </p>
          <p className="project-technologies">
            Python · Requests · pytest · REST API
          </p>
          <a
            href="https://github.com/smikander/api-data-fetcher"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {t('projects.viewCode')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
