import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Grid.css";

import mediumLogo from "../assets/medium-logo_black.png";
import githubLogo from "../assets/github-logo_black.png";

function Grid({ data, setSelectedProject } ){

  function handleClick(selectedProject){
    setSelectedProject(selectedProject)
  }

  function hyphenateTitle(title){
    return title.replace(/\s/g, "-").toLowerCase();
  }

  const webProjects = data.map((project) => {
    const url = hyphenateTitle(project.title)
    
    return (
      <div key={project.title} className="card">

          <Link 
            to={{
            pathname: "/project",
            hash: `#${url}`,
            }}
            onClick={() => handleClick(project)}
          >
            <img className="web-gif" src={project.image} alt={project.title}></img>
          </Link>
        
        

        <div className="work-description">
          <Link 
            to={{
              pathname: "/project",
              hash: `#${url}`,
            }}
            className="web-project-link" 
            onClick={() => handleClick(project)}
          >
            <h2 className="title">{project.title}</h2>
          </Link>
          <i className="subtitle">{project.subtitle}</i>
          <p className="project-detail">
            <span className="website-logo-wrapper">
              {project.url ? 
              <a href={project.url} target="_blank" rel="noopener noreferrer"> 
                <span>website</span>
                <img className="website-logo" src={mediumLogo}></img>
              </a> : 
              null }
              {project.github_url ? 
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
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