import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import pbService from "../services";
import { AuthContext } from "../provider/AuthContext";


export default function Navbar() {

  const nav = useNavigate();

  const { authChange } = React.useContext(AuthContext);
  const {setAuthChange} = React.useContext(AuthContext);


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!authChange) return;
    const checkAuthStatus = async () => {
      const user = await pbService.isLoggedIn();
      if (user) {
        setIsAuthenticated(true);
        setUser(user.record.email);
      }
    };
    checkAuthStatus();
  } , [authChange]);

  const handleLogOut = async () => {
    await pbService.logout();
    setAuthChange(false);
    setIsAuthenticated(false);
    setUser(null);
    nav('/login')
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center mr-5">
            <Link to="/" classNameName="site-title"><span className="text-lg text-white font-bold">BlogAI</span></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              
                {isAuthenticated && <Link to='/generate' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog Generator</Link>}
                <Link to='/About' className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>

        
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <div className="relative ml-3">
              <div className="flex justify-center items-center">
                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </button>
                {isAuthenticated ? (
                  <div className="flex justify-center items-center">
                    <span className="text-white text-md ml-2 mr-2">{user}</span>  
                    <button onClick={handleLogOut} className="flex justify-center items-center bg-slate-100 rounded-full p-2 hover:bg-slate-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"/></svg>
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
                )
                }
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Blog Generator</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>

        </div>
      </div>
    </nav>


  );
}


// <nav classNameName="navbar">
// <Link to="/" classNameName="site-title">
//   Site Name
// </Link>
// <ul classNameName="nav-list">
//   <li classNameName="nav-item">
//     <Link to="/contact">Contact</Link>
//   </li>
//   <li classNameName="nav-item">
//     <Link to="/AuthenticationPages/login">Login</Link>
//   </li>
//   <li classNameName="nav-item">
//     <Link to="/AuthenticationPages/logout">Logout</Link>
//   </li>
//   <li classNameName="nav-item">
//     <Link to="/AuthenticationPages/register">Register</Link>
//   </li>
// </ul>
// </nav>
