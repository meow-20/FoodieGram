import React from 'react';
import { Link } from 'react-router-dom';

const RegisterChoice = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        Choose Registration Type
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Select how you want to register:
      </p>
      <div className="flex flex-col gap-4">
        <Link
          to="/user/register"
          className="w-full px-6 py-4 text-center text-white bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors"
        >
          Register as User
        </Link>
        <Link
          to="/foodpartner/register"
          className="w-full px-6 py-4 text-center text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
        >
          Register as Food Partner
        </Link>
      </div>
    </div>
  );
};

export default RegisterChoice;

