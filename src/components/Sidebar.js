import React from "react";

import NavBar from "./NavBar";
import Filter from "./Filter";

function Sidebar(){
  return (
    <div className="sidebar">
      <h1>Repostory for New Media Art</h1>
      <hr></hr>
      <NavBar />
      <hr></hr>
      <Filter />
    </div>
  )
}

export default Sidebar;