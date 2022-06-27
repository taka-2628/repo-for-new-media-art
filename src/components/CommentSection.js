import React, { useState } from "react";
import "../stylesheets/Comments.css";

import Comment from "./Comment";
import LoginSignup from "./LoginSignup";
import CommentForm from "./CommentForm";

function CommentSection( { selected, comments, currentUser, setCurrentUser, users, projects, setProjects } ){

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
    return (
      <Comment 
      key={comment.id}
      comment={comment}
      currentUser={currentUser}
      onDeleteComment={onDeleteComment}
    />
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

export default CommentSection;