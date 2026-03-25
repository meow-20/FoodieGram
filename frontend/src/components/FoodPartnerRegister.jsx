import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodPartnerRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const name = e.target.businessName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/foodpartner/register",
        { name, email, password },
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      navigate("/create-food");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Food Partner Register
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="businessName"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link
          to="/foodpartner/login"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
