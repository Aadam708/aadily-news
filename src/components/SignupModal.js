import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');


export default function SignupModal({ isOpen, onRequestClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      firstName,
      lastName,
    };


    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });


      if (response.ok) {
        console.log('User signed up successfully');
        onRequestClose();
      } else {
        console.error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Signup Modal"
      className="signup-modal"
      overlayClassName="signup-modal-overlay"
    >
      <h2>Sign Up</h2>
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
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}