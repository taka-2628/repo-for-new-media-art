import React, { useState } from "react";
import "../stylesheets/Comments.css";

import CommentForm from "./CommentForm";
import LoginSignup from "./LoginSignup";

import anonymousIcon from "../assets/anonymous-user-icon.png";
import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";

function Comments( { selected, comments, currentUser, setCurrentUser, users, projects, setProjects } ){

  function handleDelete(id) {   
    fetch(`http://localhost:9292/comments/${id}`, {
      method: "DELETE"
    });
    onDeleteComment(id);
  }
  function onDeleteComment(id){
    const updatedComments = comments.filter(comment => comment.id !== id);
    const updatedProjects = projects.map((project) => {
      if(project.id === selected.id){
        project.comments = updatedComments
        return project
      } else {
        return project
      }
    });
    setProjects(updatedProjects);
  }

  const commentlist = comments.map((comment) => {
    const date = new Date(comment.created_at) // formated_Date - SDK returned date
    const formatedDate = (`${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    const editDelete = 
      currentUser ? 
      (comment.user_id === currentUser.id ? 
        <div className="edit-delete">
          <img src={editIcon} />
          <img src={deleteIcon} onClick={()=>handleDelete(comment.id)}/>
        </div> : 
      null) : 
      null;

    return(
      <li key={comment.id}>
        <div className="comment-header">
          <img src={comment.user.profile_image ? comment.user.profile_image : anonymousIcon} className="user-icon"></img>
          <span className="username">{comment.user.username}</span>
          <span className="date">{formatedDate}</span>
        </div>
        {editDelete}
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
      { 
        currentUser ? 
        <CommentForm selected={selected} currentUser={currentUser} comments={comments} projects={projects} setProjects={setProjects}/> : 
        <LoginSignup setCurrentUser={setCurrentUser} users={users} />
      }
    </div>
  )
}

export default Comments;