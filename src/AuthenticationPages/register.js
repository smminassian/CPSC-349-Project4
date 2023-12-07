// import React from "react";
import React, { useRef, useState, useEffect } from "react";
//import {
  //faCheck,
  //faTimes,
  //faInfoCircle,
//} from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle changes in form input fields
  const handleChange = (e) => {
    // Extract the name and value from the input field
    const { name, value } = e.target;
    // Update the formData state using the previous state and the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    // prevent the default form submission behavior
    e.preventDefault();
    // Add your registration logic here
    console.log("Form submitted with data:", formData);
    // replace the console.log statement with your registration logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-green-300 p-8 rounded shadow-md w-96 ">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Register Page
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
