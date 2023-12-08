import React, { useState } from "react";
import pbService from "../services";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { setAuthChange } = React.useContext(AuthContext);

  const nav = useNavigate();

  // handle changes in form input fields
  const handleChange = (fieldName, value) => {
    const updatedFormData = { ...formData };
    updatedFormData[fieldName] = value;
    setFormData(updatedFormData);
  };

  // handle form submission
  const handleSubmit = async (e) => {
    // prevent the default form submission behavior
    e.preventDefault();
    // registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      await pbService
        .signUp(formData.email, formData.password)
        .then(async (user) => {
          if (user) {
            user = await pbService.login(formData.email, formData.password);
            setAuthChange(true);
            nav("/");
          } else {
            alert("Invalid email or password");
          }
        });
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-slate-200 w-96 p-2 pt-10 pb-10 rounded shadow-md">
        <span className="text-2xl font-bold mb-5">Sign Up</span>
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
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" w-40 h-10 bg-green-400 text-black rounded-md hover:bg-white hover:border-green-400 hover:border mt-2 mb-2"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center">
          <span className="text-black text-sm mb-2">
            Already have an account?{" "}
            <Link to="/login" className="text-black text-sm underline">
              login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
