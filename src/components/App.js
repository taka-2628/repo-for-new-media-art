import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';
import About from './About';
import Submit from "./Submit";
import Grid from './Grid';
import Project from './Project';

import { web } from '../datatemp/data';

const genres = [
  "virtual art", 
  "computer graphics", 
  "computer animation",
  "digital art", 
  "interactive art", 
  "sound art",
  "Internet art", 
  "video games", 
  "robotics", 
  "3D printing", 
  "cyborg art"
]

function App() {
  const [ selected, setSelected ] = useState("");
  
  function setSelectedProject(project){
    setSelected(project)
  }

  return (
    <>
      <Sidebar genres={genres}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Grid data={web} setSelectedProject={setSelectedProject}/>}/>
          <Route path="/project" element={<Project selected={selected}/>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/submit-your-art" element={<Submit />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
