// src/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: '/api', // This will be proxied to http://localhost:5000/api
});

export const fetchUsers = () => API.get('/users');