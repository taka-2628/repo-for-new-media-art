import React from "react";
import "../stylesheets/Project.css";

import Comments from "./Comments.js";

import mediumLogo from "../assets/medium-logo_black.png";
import githubLogo from "../assets/github-logo_black.png"

function Project( { selected, currentUser, setCurrentUser } ){
  console.log(selected)

  const techBadges = selected.technologies.map((tech) => {
    return(<li key={tech.id}>{tech.technology}</li>)
  })

  const comments = selected.comments;

  return (
    <div id="project">
      <section id="top-section">
        <div id="image-container">
          <img id="img-project" src={selected.image} alt={selected.title}></img>
        </div>

        <Comments comments={comments} currentUser={currentUser}/>
      </section>
      
      <hr/>
      
      <section id="bottom-section">
        <div id="bottom-left">
          <h3>{selected.title}</h3>
          <h4>{selected.subtitle}</h4>
          <div className="website-logo-wrapper">
              {selected.url ? 
              <a href={selected.url} target="_blank" rel="noopener noreferrer"> 
                <span>website</span>
                <img className="website-logo" src={mediumLogo}></img>
              </a> : 
              null }
              {selected.github_url ? 
              <a href={selected.github_url} target="_blank" rel="noopener noreferrer">
                <span>github</span>
                <img className="website-logo" src={githubLogo}></img>
              </a> : 
              null }
          </div>
          <ul>
            {techBadges}
          </ul>
        </div>

        <div id="bottom-center">
          <p>{selected.description}</p>
        </div>

        <div id="bottom-right">
          <div>
            <img src={selected.user.profile_image}></img>
            <span>{selected.user.username}</span>
          </div>
          <p>{selected.user.intro}</p>
        </div>
          
      </section>
      


    </div>
  )
}

export default Project;