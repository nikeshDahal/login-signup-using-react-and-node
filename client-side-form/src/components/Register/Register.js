import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate=useNavigate()
  const handleLoginRoute=()=>{
    navigate("/login");
  }
  const handleRegister=()=>{
   const{name,email,password,reEnterPassword}=user;
   if(name && email && password &&(password===reEnterPassword)){
     axios.post("http://localhost:9002/register",user)
     .then(res=>{
      alert(res.data.message);
      navigate("/login");
     }); 
    //  alert("posted");
     console.log(user);
   }else{
     alert("invalid");
   }

  }




  return (
    <div className="Register">
        {console.log(user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        placeholder="Re-enter your Password"
        onChange={handleChange}
      ></input>
      <button className="button" onClick={handleLoginRoute}>Login</button>
      <div>or</div>
      <button className="button" onClick={handleRegister}> Register</button>
    </div>
  );
};
export default Register;
