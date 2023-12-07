import React, { useState } from "react";

export default function ForgotPass() {
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
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Reset Password
        </h1>
        <p className="text-gray-600 mb-4 text-sm text-center">
          A link will be sent to your email address to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
