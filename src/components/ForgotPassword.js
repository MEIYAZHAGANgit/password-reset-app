// components/ForgotPassword.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleForgotPassword = async () => {
    // Implement logic to send email with reset link
    // Use API to check if the user exists in the database

    // If user exists, redirect to reset password page with a token
    history.push(`/reset-password/${token}`);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Forgot Password</h2>
          <p className="card-text">Enter your email to reset your password.</p>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleForgotPassword}>
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
