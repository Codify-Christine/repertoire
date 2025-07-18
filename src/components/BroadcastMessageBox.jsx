import React from "react";
import { Send } from "lucide-react";

const BroadcastMessageBox = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-10">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">✉️ Send Broadcast Message <span className="text-xs text-gray-500">(Leaders Only)</span></h3>
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        <Send className="text-blue-600" size={28} />
        <p className="text-gray-700">Send messages to all members or specific groups</p>
        <p className="text-sm text-gray-500">This feature is available for church leaders and ministry heads</p>
        <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 text-sm">
          Contact Admin for Access
        </button>
      </div>
    </div>
  );
};

export default BroadcastMessageBox;
