import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/AuthenticationPages/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/AuthenticationPages/logout">Logout</Link>
        </li>
        <li className="nav-item">
          <Link to="/AuthenticationPages/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
