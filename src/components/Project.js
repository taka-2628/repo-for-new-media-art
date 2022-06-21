import React from "react";
import "../stylesheets/Project.css";

import Comments from "./Comments.js";

function Project( {selected} ){

  return (
    <div id="project">
      <section id="top-section">
        <div id="image-container">
          <img id="img-project" src={selected.image} alt={selected.title}></img>
        </div>

        <Comments />
      </section>
      
      <hr/>
      
      <section id="bottom-section">
        <div id="bottom-left"></div>
        <div id="bottom-center"></div>
        <div id="bottom-right"></div>
      </section>
      


    </div>
  )
}

export default Project;