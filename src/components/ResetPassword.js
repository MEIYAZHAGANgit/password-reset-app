// components/ResetPassword.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Implement logic to verify token and show/hide form based on token validity
  }, [token]);

  const handleResetPassword = async () => {
    // Implement logic to update password in the database
    // Clear the random string/token in the database

    // Redirect to a login page or any other appropriate page
    history.push('/login');
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Reset Password</h2>
          <p className="card-text">Enter your new password to reset your account.</p>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
