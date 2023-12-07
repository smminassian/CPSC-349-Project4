import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pbService from "../services";
import { AuthContext } from "../provider/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setAuthChange } = React.useContext(AuthContext);

  const nav = useNavigate();

  const handleChange = (fieldName, value) => {
    const updatedFormData = { ...formData };
    updatedFormData[fieldName] = value;
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await pbService.login(formData.email, formData.password);
    if(user) {
      console.log("hi")
      setAuthChange(prev => !prev);
      nav("/");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-slate-200 w-96 p-2 pt-10 pb-10 rounded shadow-md">
        <span className="text-2xl font-bold mb-5">Login</span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 h-10 bg-green-400 text-black rounded-md hover:bg-white hover:border-green-400 hover:border mt-2 mb-2"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center">
          <span className="text-black text-sm mb-2">Don't have an account? <Link
            to="/signup"
            className="text-black text-sm underline"
          >
            Sign Up
          </Link></span>
          
        </div>
      </div>
    </div>
  );
}
