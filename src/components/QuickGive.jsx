// src/components/QuickGive.jsx
import React from 'react';

const options = ['Tithe', 'Offering', 'Building Fund', 'Missions'];

const QuickGive = () => (
  <div>
    <h2 className="text-lg font-semibold mb-3">Quick Give</h2>
    <div className="flex flex-wrap gap-4">
      {options.map((label, idx) => (
        <button
          key={idx}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default QuickGive;

