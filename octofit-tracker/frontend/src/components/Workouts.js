import React, { useState, useEffect } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  const CODESPACE_NAME = process.env.REACT_APP_CODESPACE_NAME || 'turbo-space-acorn-gj6v6w9rg4j3vwjv';
  const API_URL = `https://${CODESPACE_NAME}-8000.app.github.dev/api/workouts`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>{workout.name} - {workout.duration} min</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
