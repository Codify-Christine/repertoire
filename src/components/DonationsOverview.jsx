// src/components/DonationsOverview.jsx
import React from 'react';

const stats = [
  { label: 'This Year', amount: '$6,500' },
  { label: 'This Month', amount: '$600' },
  { label: 'Active Pledges', amount: '2' },
];

const DonationsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-white shadow rounded p-4">
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-xl font-bold">{item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default DonationsOverview;
