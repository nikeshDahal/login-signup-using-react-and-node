import './App.css';
import React from 'react';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [user,setLoginUser]=useState({});
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path="/" element={user &&user._id ?<Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register/>} />
        </Routes>

      </Router>
        
      {/* <Homepage/>
      <Login/>
      <Register/> */}

    </div>
  );
}
export default App;
