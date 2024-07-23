import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />}  />
      <Route path="/adminlogin" element={<AdminLogin />}  />
    </Routes>
  );
};

export default Routers;
