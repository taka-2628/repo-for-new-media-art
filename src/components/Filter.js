import React from "react";

function Filter(){
  return (
    <div id="filter">
      <h3>Filter</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked/>
          <i className="arrow"></i>
          <h4>genre</h4>
          <p>This UI was written in HTML and CSS.</p>
        </li>
        <li>
          <input type="checkbox" defaultChecked/>
          <i className="arrow"></i>
          <h4>technology</h4>
          <p>Using the sibling and checked selectors</p>
        </li>
      </ul>
    </div>
  )
}

export default Filter;