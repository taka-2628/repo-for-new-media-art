import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact="true"
      >
        About
      </NavLink>
      <NavLink    
        to="/my-page"
        exact="true"
      >
        My Page
      </NavLink>
      <NavLink    
        to="/submit"
        exact="true"
      >
        Submit
      </NavLink>
    </nav>
  )
}

export default NavBar;