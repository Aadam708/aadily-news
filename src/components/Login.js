// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
// import './Login.css'; // Make sure you have the CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });

      if (response.data.message === 'Logged in successfully!') {
        setMessage('Login successful');
        // Redirect to home page or perform further actions
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
