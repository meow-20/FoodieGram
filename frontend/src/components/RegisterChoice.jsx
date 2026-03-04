import React from 'react';
import { Link } from 'react-router-dom';

const RegisterChoice = () => {
  return (
    <div className="container">
      <h1>Choose Registration Type</h1>
      <p>Select how you want to register:</p>
      <div className="register-choice-buttons">
        <Link to="/user/register" className="register-choice-btn user-btn">
          Register as User
        </Link>
        <Link to="/foodpartner/register" className="register-choice-btn partner-btn">
          Register as Food Partner
        </Link>
      </div>
    </div>
  );
};

export default RegisterChoice;

