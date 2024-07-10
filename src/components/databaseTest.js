// src/DatabaseMessage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DatabaseMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/message')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
      });
  }, []);

  return (
    <div>
      <h1>Message from Express:</h1>
      <p>{message}</p>
    </div>
  );
};

export default DatabaseMessage;