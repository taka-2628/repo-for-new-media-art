import { Routes, Route } from "react-router-dom";
import '../stylesheets/App.css';

import Sidebar from './Sidebar';
import Grid from './Grid';
import Project from './Project';

import { web } from '../datatemp/data';

function App() {
  return (
    <>
      <Sidebar />
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
