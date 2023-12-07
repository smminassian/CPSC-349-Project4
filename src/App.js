import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Contact from "./pages/contact";
import Login from "./AuthenticationPages/login";
import Logout from "./AuthenticationPages/logout";
import Register from "./AuthenticationPages/register";
import Generate from "./HomePageDirectories/Generate";
import { AuthProvider } from './provider/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
