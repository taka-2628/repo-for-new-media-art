import React from "react";

function Filter( { genres } ){
  console.log(genres)
  const genreList = genres.map((genre) => {
    return <p key={genre} className="genre-item">{genre}</p>
  })

  return (
    <div id="filter">
      <h3>Filter</h3>
      <ul>
        <li>
          <input type="checkbox" defaultChecked/>
          <i className="arrow"></i>
          <h4>genre</h4>
          {genreList}
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