import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ({setLoginUser}) => {
    const [user,setUser]=useState(
        {   
            name:"",
            email:"",
            password:"",
        }
    );
    const handleChange=e=>{
        const {name,value}=e.target
        
        setUser({
            ...user,
            [name]:value
        })
        
    }
    const navigate=useNavigate()
    const handleRegisterRouter=()=>{
      navigate("/register")
    }
    const handleLogin=()=>{
      const{name,email,password}=user;
      if(name&&email&&password){
        axios.post("http://localhost:9002/login",user)
        .then(res=>{
          alert(res.data.message);
          console.log(user);
          console.log(res)
          setLoginUser(res.data.user);
          navigate("/")
        })
      }else{
        alert("invalid")
      }
   }
 
  return (
      
    <div className="login">
        {console.log(user)}
      <h1>Login</h1>
      <input type="text" name="name" placeholder="Enter Name" onChange={handleChange}></input>
      <input type="text" name="email" placeholder="Enter your Email" onChange={handleChange}></input>
      <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange}></input>
      <button className="button" onClick={handleLogin}>Login</button>
      <div>or</div>
      <button className="button" onClick={handleRegisterRouter}> Register</button>
    </div>
  );
};
export default Login;
