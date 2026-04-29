import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  const CODESPACE_NAME = process.env.REACT_APP_CODESPACE_NAME || 'turbo-space-acorn-gj6v6w9rg4j3vwjv';
  const API_URL = `https://${CODESPACE_NAME}-8000.app.github.dev/api/users`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
