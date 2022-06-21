import React from "react";
import "../stylesheets/Comments.css";

function Comments(){

  return (
    <div id="comment-section">
       <form>
        <label>Add Comment</label>
        <textarea 
          type="text" 
          placeholder="comments"
        >
        </textarea>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Comments;