// src/components/MyPledges.jsx
import React from 'react';

const pledges = [
  { name: 'Building Fund 2025', amount: 5000, target: 12000, due: '2025-12-31' },
  { name: 'Youth Ministry', amount: 2400, target: 2400, due: '2024-12-31' },
];

const MyPledges = () => (
  <div>
    <h2 className="text-lg font-semibold mb-3">My Pledges</h2>
    <div className="space-y-4">
      {pledges.map((p, idx) => {
        const progress = Math.min((p.amount / p.target) * 100, 100).toFixed(1);
        return (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between mb-1 font-medium">
              <span>{p.name}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">Due: {p.due}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default MyPledges;
