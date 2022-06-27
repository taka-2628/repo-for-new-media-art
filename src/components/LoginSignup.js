import React, { useState } from "react";

function LoginSignup(){
  const [ selectedForm, setSelectedForm ] = useState("login");

  const [ loginValue, setLoginValue ] = useState("");
  const [ signupValue, setSignupValue ] = useState("");

  return (
    <>{
      (selectedForm == "login") ? 
      <div id="comment-login" className="login-signup-container">
        <h5>Log in to comment</h5>
        <form>
          <input 
            type="text" 
            placeholder="username"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          ></input>
          <input type="submit" value="Log in"></input>
        </form>
        <span>Don't have a username? <em onClick={()=> setSelectedForm("signup")} >Sign up</em></span>
      </div> :
      <div id="comment-signup" className="login-signup-container">
        <h5>Create username</h5>
        <form>
          <input 
            type="text" 
            placeholder="username"
            value={signupValue}
            onChange={(e) => setSignupValue(e.target.value)}
          ></input>
          <input type="submit" value="Sign up"></input>
        </form>
        <span>Already have a username? <em onClick={()=> setSelectedForm("login")} >Log in</em></span>
      </div>
    }</>
  )
}

export default LoginSignup;
