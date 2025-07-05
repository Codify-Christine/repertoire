// src/components/PrayerRequestForm.jsx
import React, { useState } from 'react';

const PrayerRequestForm = () => {
  const [request, setRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Prayer submitted: ${request}`);
    setRequest('');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Submit a Prayer Request</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          className="w-full border rounded p-2"
          rows="4"
          placeholder="Write your prayer..."
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PrayerRequestForm;
