import React from "react";
import "./Education.css";

const educationData = [
  {
    institution: "South-Eastern Finland University of Applied Sciences",
    degree: "Bachelor of Business Information Technology",
    year: "2018 - 2021",
    content: "Basics of programming, application programming, databases, 3D modeling, games and gamification, graphic design, image processing, service design, and more."
  },
  {
    institution: "Savonia University of Applied Sciences",
    degree: "Complementary Degree in BCA (Bachelor of Culture and Arts)",
    year: "2003 - 2004",
    content: "Focus on research-based activity in crafts and design, graphic design and multimedia production."
  },
  {   
    institution: "Online Courses",
    degree: "Various online courses",
    year: "Ongoing",
    content: "Continuous learning through platforms like Udemy and Helsinki University to stay updated with the latest technologies and best practices in frontend and backend development."
  }      
];

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-year">{edu.year}</p>
            <p className="education-content">{edu.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
