import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import Forgot from "./screens/Auth/Forgot"
import Otp from "./screens/Auth/Otp";
import Updatepass from "./screens/Auth/Updatepass"
import Dashboard from "./screens/Pages/Dashboard/Dashboard"
import Teammanagement from "./screens/Pages/Teammanagement/Teammanagement"
const App = () => {
  return (
    <>
      <div>


        <Routes>
          <Route key="Login" path="/" element={<Login />} />
          <Route key="Login" path="/Login" element={<Login />} />
          <Route key="Register" path="/Register" element={<Register />} />
          <Route key="Forgot" path="/Forgot" element={<Forgot />} />
          <Route key="Otp" path="/Otp" element={<Otp />} />
          <Route key="Updatepass" path="/Updatepass" element={<Updatepass />} />
          <Route key="Dashboard" path="/Dashboard" element={
            <>
              <Navbar />
              <Dashboard />
            </>
          } />

          <Route key="Teammanagement" path="/Teammanagement" element={
            <>
              <Teammanagement />
              <Navbar />
            </>
          } />


        </Routes>
        <Footer />
      </div >
    </>
  );
};

export default App;