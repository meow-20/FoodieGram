import React from 'react';
import { Link } from 'react-router-dom';

const FoodPartnerLogin = () => {
  return (
    <div className="container">
      <h1>Food Partner Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="link">
        <Link to="/foodpartner/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
