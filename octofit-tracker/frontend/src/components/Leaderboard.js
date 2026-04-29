import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const CODESPACE_NAME = process.env.REACT_APP_CODESPACE_NAME || 'turbo-space-acorn-gj6v6w9rg4j3vwjv';
  const API_URL = `https://${CODESPACE_NAME}-8000.app.github.dev/api/leaderboard`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>{entry.user}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
