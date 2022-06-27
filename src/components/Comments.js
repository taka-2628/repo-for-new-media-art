import React, { useState } from "react";
import "../stylesheets/Comments.css";

import CommentForm from "./CommentForm";
import LoginSignup from "./LoginSignup";

function Comments( { comments, currentUser, setCurrentUser, users } ){
  const [body, setBody] = useState("");
  
  const commentlist = comments.map((comment) => {
    const date = new Date(comment.created_at) // formated_Date - SDK returned date
    const formatedDate = (`${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

    return(
      <li key={comment.id}>
        <div className="comment-header">
          <img src={comment.user.profile_image} className="user-icon"></img>
          <span className="username">{comment.user.username}</span>
          <span className="date">{formatedDate}</span>
        </div>
        <p>{comment.body}</p>
      </li>
    )
  })

  return (
    <div id="comment-section">
      <div id="comment-list" className={ currentUser ? "h-90" : "h-80" }>
        <ul>
          {commentlist}
        </ul>
      </div>
      {currentUser ? <CommentForm /> : <LoginSignup setCurrentUser={setCurrentUser} users={users} />}
    </div>
  )
}

export default Comments;