// src/components/MilestonesList.jsx
import React from 'react';

const milestones = [
  { id: 1, title: 'Baptism', completed: true },
  { id: 2, title: 'Joined Choir', completed: true },
  { id: 3, title: 'First Mission Trip', completed: false },
];

const MilestonesList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Spiritual Milestones</h2>
      <ul className="space-y-2">
        {milestones.map((item) => (
          <li key={item.id} className="flex items-center">
            <div
              className={`w-4 h-4 rounded-full mr-2 ${
                item.completed ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MilestonesList;
