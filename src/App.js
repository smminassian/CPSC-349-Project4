import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import About from "./pages/About";
import Login from "./AuthenticationPages/login";
import Logout from "./AuthenticationPages/logout";
import Register from "./AuthenticationPages/register";
import ForgotPass from "./AuthenticationPages/forgotpass";
import Generate from "./HomePageDirectories/Generate";
import Blogs from "./HomePageDirectories/Blogs";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/AuthenticationPages/login" element={<Login />} />
          <Route path="/AuthenticationPages/logout" element={<Logout />} />
          <Route path="/AuthenticationPages/register" element={<Register />} />
          <Route
            path="/forgotpass"
            element={<ForgotPass />}
          />
          <Route path="/HomePageDirectories/Generate" element={<Generate />} />
          <Route path="/HomePageDirectories/Blogs" element={<Blogs />} />
        </Routes>
    </>
  );
}

export default App;
