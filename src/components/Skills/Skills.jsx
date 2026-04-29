import React from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "CSS / LESS",
      "Responsive & accessible UI development",
      "Modern & legacy frontend systems"
    ]
  },
  {
    title: "Ecommerce",
    items: [
      "Adobe Commerce (Magento)",
      "Custom theme development",
      "SEO improvements",
      "Accessibility enhancements"
    ]
  },
  {
    title: "Backend (Growing)",
    items: [
      "PHP (Magento backend)",
      "Node.js (learning & projects)",
      "SQL (basics)",
      "C++ (basics)"
    ]
  },
  {
    title: "Frameworks",
    items: [
      "React (learning & projects)",
      "Angular (basics)",
      "Magento frontend framework (Knockout.js)"
    ]
  },
  {
    title: "Release & Delivery",
    items: [
      "Managing releases for Adobe Commerce (Magento) in production and staging environments"
    ]
  },
  {
    title: "Tools",
    items: [
      "Git / GitHub",
      "Docker",
      "Jira",
      "Confluence"
    ]
  },
  {
    title: "Soft Skills",
    items: [
      "Persistence and continuous learning",
      "Teamwork",
      "Problem-solving",
      "Resilience"
    ]
  },
  {
    title: "Other Skills",
    items: [
      "Agile Development",
      "Debugging",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Accessibility (WCAG)"
    ]
  },
  {
    title: "Languages",
    items: [
      "Finnish (native)",
      "English (fluent)",
      "Swedish (intermediate)",
      "Spanish (basic)"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;