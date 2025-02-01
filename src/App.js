import React from "react";
import { Routes, Route } from "react-router-dom";
import Login  from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import Forgot from "./screens/Auth/Forgot"
import Otp from "./screens/Auth/Otp";
import Updatepass from "./screens/Auth/Updatepass"
 const App = () => {
  return (
    <div>
      

      <Routes>
        <Route key="Login" path="/" element={<Login />} />
        <Route key="Login" path="/Login" element={<Login />} />
        <Route key="Register" path="/Register" element={<Register />} />
        <Route key="Forgot" path="/Forgot" element={<Forgot />} />
        <Route key="Otp" path="/Otp" element={<Otp />} />
        <Route key="Updatepass" path="/Updatepass" element={<Updatepass />} />


      </Routes>
    </div>
  );
};

export default App;