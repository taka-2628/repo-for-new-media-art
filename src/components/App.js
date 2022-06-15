import { Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';
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
  return (
    <>
      <Sidebar genres={genres}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Grid data={web} />}/>
          <Route path="/project" element={<Project />}/>
        </Routes>
      </main>
    </>

  );
}

export default App;
