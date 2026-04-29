import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  const CODESPACE_NAME = process.env.REACT_APP_CODESPACE_NAME || 'turbo-space-acorn-gj6v6w9rg4j3vwjv';
  const API_URL = `https://${CODESPACE_NAME}-8000.app.github.dev/api/activities`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity.type} - {activity.duration} min</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
