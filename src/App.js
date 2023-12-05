import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Contact from "./pages/contact";
import Login from "./AuthenticationPages/login";
import Logout from "./AuthenticationPages/logout";
import Register from "./AuthenticationPages/register";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AuthenticationPages/login" element={<Login />} />
          <Route path="/AuthenticationPages/logout" element={<Logout />} />
          <Route path="/AuthenticationPages/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
