import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <a href={details.source}>
        <img src={details.thumbnail} alt="" className="project-image"/>
      </a>
      <p className="project-description">{details.description}</p>

      <div className="project-stack-container">
        {details.stack.map((item) => (
          <div className="project-stack" key={item}>{item}</div>
        ))}
      </div>

    </div>
  );
};

export default ProjectsCard;
