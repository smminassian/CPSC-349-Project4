import "./navbar.css";
import React from "react";

export default function Navbar() {
  return (
    // <nav className="nav">
    //   <a href="/">Site Name</a>
    //   <ul>
    //     <li>
    //       <a href="/page1">Page1</a>
    //     </li>
    //     <li>
    //       <a href="/page2">Page2</a>
    //     </li>
    //   </ul>
    // </nav>

    // <div className="text-white">
    //   <h1 className="w-full text-3x1 font-bold text-[#00df9a]">REACT APP</h1>
    // </div>
    <div>
      <nav className="navbar">
        <a href="/" className="site-name">
          Site Name
        </a>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/page1" className="nav-link">
              Page1
            </a>
          </li>
          <li className="nav-item">
            <a href="/page2" className="nav-link">
              Page2
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
