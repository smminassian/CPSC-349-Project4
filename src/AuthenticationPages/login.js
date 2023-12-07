import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., make an API call)

    // For now, let's just log the form data
    console.log("Form Data Submitted:", formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-green-300 p-8 rounded shadow-md w-96 ">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="username"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </form>
        <div>
          <Link
            to="/AuthenticationPages/forgotpass"
            className="text-black-500 underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
