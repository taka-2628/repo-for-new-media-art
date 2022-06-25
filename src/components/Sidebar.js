import React from "react";

import NavBar from "./NavBar";
import Filter from "./Filter";

function Sidebar( { genres, technologies } ){
  return (
    <div className="sidebar">
      <div id="vert-line"></div>
      <h1>Repostory for New Media Art</h1>
      <hr></hr>
      <NavBar />
      <hr></hr>
      <Filter genres={genres} technologies={technologies} />
    </div>
  )
}

export default Sidebar;