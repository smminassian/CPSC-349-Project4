import { Link } from "react-router-dom";
import React from "react";
import "./home.css";

//"text-white text-2xl font-bold mb-2" is tailwind
export default function HomePage() {
  return (
    <div className="home-container">
      <div className="contentPart">
      <div className="sideBar">
        <ul>
          <li className="text-white text-2xl font-bold mb-2"> 
            <Link to="/src/HomePageDirectories/Generate">Generate</Link>
          </li>
          <li className="text-white text-2xl font-bold mb-2">
            <Link to="/src/HomePageDirectories/Blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>

      
  );
};



