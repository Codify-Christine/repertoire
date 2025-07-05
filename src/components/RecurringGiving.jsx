// src/components/RecurringGiving.jsx
import React from 'react';

const RecurringGiving = () => (
  <div className="bg-yellow-100 border border-yellow-300 p-4 rounded">
    <h2 className="text-lg font-semibold mb-2">Set Up Recurring Giving</h2>
    <p className="text-sm text-gray-700 mb-3">
      Automate your giving by setting up recurring donations. You can change or cancel anytime.
    </p>
    <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
      Set Up Now
    </button>
  </div>
);

export default RecurringGiving;
