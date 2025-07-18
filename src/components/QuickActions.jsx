import React from "react";

const actions = ["Message Pastor", "Group Messages", "Notification Settings"];

const QuickActions = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">⚡ Quick Actions</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {actions.map((action, i) => (
          <button
            key={i}
            className="border px-4 py-3 text-sm rounded hover:shadow text-gray-700"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
