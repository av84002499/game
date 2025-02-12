import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Forgot from "../screens/Auth/Forgot";
import Otp from "../screens/Auth/Otp";
import Updatepass from "../screens/Auth/Updatepass";
import Dashboard from "../screens/Pages/Dashboard/Dashboard";
import Teammanagement from "../screens/Pages/Teammanagement/Teammanagement";
import Createplear from "../screens/Pages/Createplear/Createplear";
import Joinpage from "../screens/Pages/Joinpage/Joinpage";
import Playpager from "../components/Playpager/Playpager"
import Captain from "../screens/Pages/Captain/Captain"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="/Updatepass" element={<Updatepass />} />
      <Route path="/Createplear" element={<Createplear />} />
      <Route path="/Joinpage" element={<Joinpage />} />
      <Route path="/Playpager" element={<Playpager />} />
      <Route path="/Captain" element={<Captain />} />


      <Route
        path="/Dashboard"
        element={
          <>
            <Navbar />
            <Dashboard />
          </>
        }
      />

      <Route
        path="/Teammanagement"
        element={
          <>
            <Teammanagement />
            <Navbar />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;