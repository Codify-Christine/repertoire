import React from "react";

const BulletinSection = () => {
  return (
    <div className="mt-10 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-[#1b2c45] mb-4">📩 Digital Bulletin & Newsletter</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-semibold">This Week’s Bulletin</p>
          <p className="text-sm text-gray-600">January 5, 2025 - Week 1</p>
          <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Download PDF</button>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-semibold">Monthly Newsletter</p>
          <p className="text-sm text-gray-600">January 2025 Edition</p>
          <button className="mt-2 px-4 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 text-sm">View Online</button>
        </div>
      </div>
    </div>
  );
};

export default BulletinSection;
