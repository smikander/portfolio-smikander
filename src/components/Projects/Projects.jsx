import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {/* Project cards will be rendered here */}
        <div className="project-card">
          <h3 className="project-title">Ecommerce Platform Customizations and Improvements</h3> 
        
          <p className="project-description">Worked on various customizations and improvements for an ecommerce platform built with 
            Adobe Commerce (Magento). This included optimizing performance, enhancing user experience, and implementing new features 
            to meet business requirements.</p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
