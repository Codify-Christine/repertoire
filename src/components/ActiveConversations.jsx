import React from "react";

const conversations = [
  {
    name: "Pastor John Doe",
    role: "Senior Pastor",
    initials: "PJD",
    lastMessage: "Thank you for your dedication to the ministry",
    time: "2 hours ago",
    unread: false,
  },
  {
    name: "Youth Ministry Group",
    role: "Group Chat",
    initials: "YMG",
    lastMessage: "Sarah: Looking forward to the retreat!",
    time: "1 day ago",
    unread: true,
  },
  {
    name: "Sister Grace",
    role: "Choir Leader",
    initials: "SG",
    lastMessage: "Practice is at 7 PM tonight",
    time: "2 days ago",
    unread: false,
  },
];

const ActiveConversations = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">💬 Active Conversations</h3>
      <div className="space-y-4">
        {conversations.map((c, i) => (
          <div key={i} className="flex justify-between items-center border-t pt-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                {c.initials}
              </div>
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-gray-500">{c.lastMessage}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">{c.time}</p>
              {c.unread && <span className="w-2 h-2 bg-red-500 rounded-full inline-block mt-1"></span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveConversations;
