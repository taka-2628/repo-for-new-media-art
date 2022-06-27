import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';
/* import About from './About'; */
import Submit from "./Submit";
import Grid from './Grid';
import Project from './Project';

//import { web } from '../datatemp/data';
/*
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
*/
function App() {
  const [ projects, setProjects ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ technologies, setTechnologies ] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:9292/projects'),
      fetch('http://localhost:9292/users'),
      fetch('http://localhost:9292/genres'),
      fetch('http://localhost:9292/technologies')
    ]).then(function(responses){
      return Promise.all(responses.map(function (response) {
        return response.json();
      }))
    }).then(function(data){
      const projects = data[0];
      const users = data[1];
      const genres = data[2];
      const technologies = data[3];
      
      setProjects(projects);
      setUsers(users);
      setGenres(genres);
      setTechnologies(technologies);
    })
  }, []);

  const [ currentUser, setCurrentUser ] = useState(null);
  const [ selected, setSelected ] = useState("");

  return (
    <>
      <Sidebar genres={genres} technologies={technologies}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Grid data={projects} setSelected={setSelected}/>}/>
          <Route path="/project" element={
            <Project selected={selected} currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} projects={projects} setProjects={setProjects}/>
          }/>
          {/*<Route exact path="/about" element={<About />} />*/}
          <Route exact path="/submit-your-art" element={<Submit genres={genres}/>} />
        </Routes>
      </main>
    </>

  );
}

export default App;
