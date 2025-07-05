import React from "react";

const QuickSettings = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">Quick Settings</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Appearance Theme</h4>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="theme" defaultChecked />
              <span className="ml-2">Light Mode</span>
            </label>
            <label>
              <input type="radio" name="theme" />
              <span className="ml-2">Dark Mode</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Language</h4>
          <select className="border rounded px-3 py-2 w-full">
            <option>English (Default)</option>
          </select>
        </div>

        <div>
          <h4 className="font-medium mb-2">Notifications</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              Email Alerts
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              SMS Alerts
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Push Notifications
            </label>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Data & Privacy</h4>
          <button className="text-blue-600 text-sm font-medium hover:underline mb-2">Download My Data</button>
          <button className="text-blue-600 text-sm font-medium hover:underline">Privacy Settings</button>
        </div>
      </div>
    </div>
  );
};

export default QuickSettings;
