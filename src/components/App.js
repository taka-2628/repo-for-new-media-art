import logo from '../logo.svg';
import { Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';
import Grid from './Grid';
import Project from './Project';

function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route exact path="/" element={<Grid/>}/>
        <Route exact path="/project" element={<Project/>}/>
      </Routes>
    </>

  );
}

export default App;
