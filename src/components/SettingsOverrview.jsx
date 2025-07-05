import React from "react";

const overview = [
  { label: "Theme", value: "Light Mode" },
  { label: "Language", value: "English" },
  { label: "Email Alerts", value: "Active" },
  { label: "SMS Alerts", value: "Active" },
];

const SettingsOverview = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold text-[#1b2c45] mb-3">Current Settings Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {overview.map((item, idx) => (
          <div key={idx} className="p-3 border rounded-md">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="font-medium text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsOverview;
