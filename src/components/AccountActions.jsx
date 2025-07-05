import React from "react";

const AccountActions = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-t-4 border-red-500 mb-6">
      <h3 className="text-lg font-semibold text-red-600 mb-4">Account Actions</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Deactivate Account</p>
          <button className="text-yellow-600 border border-yellow-600 px-3 py-1 rounded hover:bg-yellow-50 text-sm">Deactivate</button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Delete Account</p>
          <button className="text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-50 text-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
