import React, { useState } from "react";
import "./register.css";
import Add from "./Add.png";
// create user authentication code
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

function Register() {
  const [err,setErr] = useState(false);
  const handleSubmit = async (e) => {
    // use for refresh when click on button
    e.preventDefault();
    // for testing
    // console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const avatarFile = e.target[3].files[0];

    // create user authentication code
try{const res = await createUserWithEmailAndPassword(auth, email, password)
}catch(err){
setErr(true)
}
  
      
  };
  return (
    <div className="container">
      <div className="form-box">
        <span className="animate__rubberBand" id="Logo-text">
          Chat App
        </span>
        <span className="Register-text">Register</span>
        {/* step 3  for firebase */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Username" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" className="img-avatar" />
            <span className="add-avatar-text">Add an avatar</span>
          </label>
          <button className="btn">Register</button>
          {err && <span>something went wrong</span>}
        </form>
      </div>
    </div>
  );
}

export default Register;
