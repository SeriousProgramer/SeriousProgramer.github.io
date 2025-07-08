import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, date, skills, description }) => {
  const skillsList = skills ? skills.split(',').map(s => s.trim()).filter(s => s) : [];

  return (
    <div className="project-card">
      <div className="card">
        <h3 className="title">{name || 'Untitled'}</h3>
        <div className="date">{date}</div>
        <p className="description">{description}</p>
        <div className="skills-section">
          <span className="skills-label">Skills used:</span>
          <ul className="skills-list">
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
