import React, { useState } from 'react'
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
function FirebaseAuth() {
    let [email , setEmail] = useState("")
    let [password , setPassword] = useState("")
    let [isLogedIn,setIsLoggedIn] = useState(false)
    let loginAttempt =()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        //   console.log('user' , user)
        setIsLoggedIn(true)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error' , error)
        });
    }
  return (
    <>
     <h2>FirebaseAuth</h2>
     <h3>loginForm</h3>
     {
        isLogedIn ? <h3>Logged In</h3>: 
       <> 
       <input type="text" placeholder='email' 
     value={email} onChange={(e)=>{
        setEmail(e.target.value);
      }} />
     <input type="password" placeholder='password' 
     value={password}
      onChange={(e)=>{
        setPassword(e.target.value);
      }}
     />
     <br></br>
     <button onClick={loginAttempt}>login</button>
     </>
     }
   
    </>
  )
}

export default FirebaseAuth