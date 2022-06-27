import React, { useState } from "react";

function CommentForm(){
  return (
    <form id="comment-form">
      <textarea 
        type="text"
        name="body"
        autoComplete="off"
        placeholder="Write your comment.."
      >
      </textarea>
      <input type="submit"></input>
    </form>
  )
}

export default CommentForm;