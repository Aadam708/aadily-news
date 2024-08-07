// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css'; // Ensure the CSS file is in the same directory as Login.js


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });


      if (response.data.message === 'Logged in successfully!') {
        setMessage('Login successful');
        const userDetails = response.data.userDetails; // Extract user details
        login(userDetails); // Pass user details to the context
        console.log("User details stored:", userDetails); // Log user details
        navigate('/homePage');
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
      <div className="form-container">
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
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}


export default Login;