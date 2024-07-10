// src/components/Connect.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

const Connect = () => {
    const [Connect, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        getUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {Connect.map(user => (
                    <li key={user.Id}>{user.Email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Connect;