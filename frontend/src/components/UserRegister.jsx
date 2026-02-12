import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post('http://localhost:3000/api/auth/user/register', { fullName, email, password })
  }
  return (
    <div className="container">
      <h1>User Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="link">
        <Link to="/user/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default UserRegister;
