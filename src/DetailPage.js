import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  let { topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [details, setDetails] = useState('');

  useEffect(() => {
    fetch(`/main/${topicId}`)
      .then(response => response.json())
      .then(data => setTopic(data))
      .catch(error => console.error('Error fetching topic details:', error));
  }, [topicId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topicId, details }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error posting details:', error));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4 p-4 border border-gray-200 rounded shadow">{topic?.name}</div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <textarea
          className="w-full p-2 border border-gray-200 rounded mb-4"
          rows="4"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Enter details here..."
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Save Details
        </button>
      </form>
    </div>
  );
};

export default DetailPage;