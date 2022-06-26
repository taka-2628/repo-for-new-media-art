import React from "react";
import "../stylesheets/Comments.css";

function Comments( { comments } ){
  console.log(comments)
  
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
      <div id="comment-list">
        <ul>
          {commentlist}
        </ul>
      </div>
      <form>
        <textarea 
           type="text"
           name="body"
           autoComplete="off"
        >
        </textarea>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Comments;