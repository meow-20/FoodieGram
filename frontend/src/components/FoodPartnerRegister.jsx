import React from 'react';
import { Link } from 'react-router-dom';

const FoodPartnerRegister = () => {
  return (
    <div className="container">
      <h1>Food Partner Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input type="text" id="businessName" name="businessName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="link">
        <Link to="/foodpartner/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
