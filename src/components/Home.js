import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let navigaton = useNavigate();
    let msgInputRef = useRef();
    useEffect(()=>{
            emailInputRef.current.value=localStorage.getItem("email");
            passwordInputRef.current.value=localStorage.getItem("password");
            if(localStorage.getItem("email") && localStorage.getItem("password")){
                validateCredentials();
            }
            
    },[])

    let validateCredentials=()=>{
        if(emailInputRef.current.value=="kavitha@gmail.com" && passwordInputRef.current.value=="Kavi@123"){
            localStorage.setItem("email", emailInputRef.current.value);
            localStorage.setItem("password", passwordInputRef.current.value);
            sessionStorage.setItem("email",emailInputRef.current.value);
            sessionStorage.setItem("password",passwordInputRef.current.value);
            navigaton("/signup",{State: { msg:msgInputRef.current.value}});
            }
            else{
                alert("Invalid Email or Password");
            }
    }
  return (
    <div>
        <form>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Message</label>
                <input ref={msgInputRef}></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                   
                   validateCredentials();
                }}>Submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default Home
