import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodPartnerLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await axios.post(
        'http://localhost:3000/api/auth/foodpartner/login',
        { email, password },
        { withCredentials: true }
      );

      console.log(response.data);
      navigate('/create-food');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Food Partner Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
          <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-3 text-white font-semibold rounded-lg transition-colors mt-2 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed opacity-50'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/foodpartner/register" className="text-blue-500 hover:text-blue-600 hover:underline">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
