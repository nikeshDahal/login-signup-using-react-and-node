import React from "react";
import "./Homepage.css"

const Homepage=({setLoginUser})=>{
    return(
        <div>
            <h1>Homepage</h1>
            <button onClick={()=>setLoginUser({})}>logout</button>
        </div>
    )
}
export default Homepage;
