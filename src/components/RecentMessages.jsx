import React from "react";

const messages = [
  {
    sender: "Pastor John Doe",
    tag: "Personal",
    preview: "Welcome to Youth Ministry...",
    date: "2025-01-05",
  },
  {
    sender: "Church Admin",
    tag: null,
    preview: "Service Schedule Update...",
    date: "2025-01-03",
  },
  {
    sender: "Sister Grace (Choir Leader)",
    tag: "Group",
    preview: "Choir Practice Reminder...",
    date: "2025-01-02",
  },
];

const RecentMessages = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">📩 Recent Messages</h3>
      <div className="space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className="border rounded p-3 hover:shadow">
            <div className="flex justify-between items-center">
              <div className="font-medium text-gray-800">{msg.sender}</div>
              {msg.tag && (
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-medium">{msg.tag}</span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">{msg.preview}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">{msg.date}</span>
              <button className="text-blue-600 text-sm hover:underline">Read</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="text-sm text-blue-600 hover:underline font-medium">View All Messages</button>
      </div>
    </div>
  );
};

export default RecentMessages;
