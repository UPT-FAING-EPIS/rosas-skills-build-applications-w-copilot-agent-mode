import React, { useState, useEffect } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const CODESPACE_NAME = process.env.REACT_APP_CODESPACE_NAME || 'turbo-space-acorn-gj6v6w9rg4j3vwjv';
  const API_URL = `https://${CODESPACE_NAME}-8000.app.github.dev/api/teams`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
