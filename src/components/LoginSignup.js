import React, { useState, useEffect } from "react";

function LoginSignup( { setCurrentUser, users } ){
  const [ selectedForm, setSelectedForm ] = useState("login");

  const [ loginValue, setLoginValue ] = useState("");
  const [ signupValue, setSignupValue ] = useState("");

  function handleLogin(e){
    e.preventDefault();
    const input = (e.target.children[0].value);
    findUsernameMatch(users, input)
  }
  function findUsernameMatch(users, input){
    const match = users.find(user => user.username == input);
    if (match){
      setCurrentUser(match.username)
    } else {
      const toSignupSpan = document.getElementById("switch-to-signp");
      toSignupSpan.textContent = "Username not found..";
    }
  }
  
  function handleSignup(e){
    e.preventDefault();
    const input = (e.target.children[0].value);
    testNewUsername(users, input)
  }
  function testNewUsername( users, input ){
    const match = users.find(user => user.username == input);
    if (match){
      const toLoginSpan = document.getElementById("switch-to-login");
      toLoginSpan.textContent = "Username already exists..";
    } else {
      createNewUsername(input);
    }
  }
  function createNewUsername(input){
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: input,
        profile_image: "",
        intro: ""
      })
    })
    .then((r) => r.json())
    .then((user) => setCurrentUser(user))
  }

  return (
    <>{
      (selectedForm == "login") ? 
      <div id="comment-login" className="login-signup-container">
        <h5>Log in to comment</h5>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="username"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          ></input>
          <input type="submit" value="Log in"></input>
        </form>
        <span id="switch-to-signp">Don't have a username?</span><em onClick={()=> setSelectedForm("signup")} >Sign up</em>
      </div> :
      <div id="comment-signup" className="login-signup-container">
        <h5>Create username</h5>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="username"
            value={signupValue}
            onChange={(e) => setSignupValue(e.target.value)}
          ></input>
          <input type="submit" value="Sign up"></input>
        </form>
        <span id="switch-to-login">Already have a username?</span><em onClick={()=> setSelectedForm("login")} >Log in</em>
      </div>
    }</>
  )
}

export default LoginSignup;
