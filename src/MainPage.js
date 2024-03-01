import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/main')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {topics.map((topic, index) => (
        <Link to={`/main/${topic.id}`} key={index} className="p-4 border border-gray-200 rounded shadow hover:bg-gray-50">
          {topic.name}
        </Link>
      ))}
    </div>
  );
};

export default MainPage;