import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import About from "./pages/About";
import Login from "./AuthenticationPages/login";
import Register from "./AuthenticationPages/register";
import Generate from "./HomePageDirectories/Generate";
import { AuthProvider } from './provider/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
