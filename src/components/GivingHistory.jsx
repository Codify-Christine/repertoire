// src/components/GivingHistory.jsx
import React from 'react';

const history = [
  { type: 'Tithe', amount: '$500', method: 'Mobile Money', date: '2025-01-01' },
  { type: 'Offering', amount: '$100', method: 'Bank Transfer', date: '2024-12-25' },
  { type: 'Building Fund', amount: '$1000', method: 'Credit Card', date: '2024-12-15' },
];

const GivingHistory = () => (
  <div>
    <h2 className="text-lg font-semibold mb-3">Giving History</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Method</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{item.type}</td>
              <td className="p-2">{item.amount}</td>
              <td className="p-2">{item.method}</td>
              <td className="p-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default GivingHistory;
