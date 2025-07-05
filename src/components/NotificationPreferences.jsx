import React from "react";

const preferences = ["Email Notifications", "SMS Alerts", "Push Notifications"];

const NotificationPreferences = () => {
  return (
    <div className="mt-10 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-[#1b2c45] mb-4">🔔 Notification Preferences</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {preferences.map((pref) => (
          <div key={pref} className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <div>
              <p className="font-medium text-[#1b2c45]">{pref}</p>
              <p className="text-sm text-gray-600">
                {pref === "Email Notifications" && "Receive announcements via email"}
                {pref === "SMS Alerts" && "Get urgent announcements via SMS"}
                {pref === "Push Notifications" && "Browser notifications for updates"}
              </p>
            </div>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Configure</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPreferences;
