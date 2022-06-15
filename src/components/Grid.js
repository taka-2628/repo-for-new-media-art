import React from "react";
import "../stylesheets/Grid.css";

import mediumLogo from "../assets/medium-logo_black.png";
import githubLogo from "../assets/github-logo_black.png";

function Grid({data} ){
  console.log(data)

  const webProjects = data.map((project) => {
    return (
      <div key={project.title} className="project-container">
        <a href="/project">
          <img className="web-gif" src={project.image} alt={project.title}></img>
        </a>

        <div className="work-description">
          <a href="/project" className="web-project-link">
            <h2 className="title">{project.title}</h2>
          </a>
          <i className="subtitle">{project.subtitle}</i>
          <p className="project-detail">
            <span className="website-logo-wrapper">
              {project.url ? 
              <a href={project.url} target="_blank" rel="noopener noreferrer"> 
                <span>website</span>
                <img className="website-logo" src={mediumLogo}></img>
              </a> : 
              null }
              {project.github ? 
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <span>github</span>
                <img className="website-logo" src={githubLogo}></img>
              </a> : 
              null }
            </span>
          </p>
        </div>
      </div>
    )
  })

  return (
    <div id="grid">
      {webProjects}
    </div>
  )
}

export default Grid;