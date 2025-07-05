import React from "react";
import {
  User,
  MessageSquare,
  Lock,
  Monitor,
  Globe,
  Settings,
} from "lucide-react";

const icons = {
  user: <User className="text-blue-600" />,
  chat: <MessageSquare className="text-blue-600" />,
  lock: <Lock className="text-blue-600" />,
  monitor: <Monitor className="text-blue-600" />,
  globe: <Globe className="text-blue-600" />,
};

const SettingsSection = ({ icon, title, settings }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-2 rounded-full mr-3">{icons[icon]}</div>
        <h3 className="text-lg font-semibold text-[#1b2c45]">{title}</h3>
      </div>
      <div className="space-y-2">
        {settings.map((setting, index) => (
          <div key={index} className="flex justify-between items-center border-t py-2">
            <span className="text-gray-700">{setting}</span>
            <button className="text-blue-600 text-sm font-medium hover:underline">Configure</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSection;
