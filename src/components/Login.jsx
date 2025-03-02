import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    onLogin(formData);
  };

  return (
    <div className="login-container" aria-label="Login page">
      <div className="login-content">
        <div className="login-card" role="form" aria-label="Login form">
          {/* Existing login card content remains unchanged */}
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Please sign in to continue</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message" role="alert" aria-live="polite">
                {error}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
