

const MessageStats = () => {
    const stats = [
  { label: "Unread", count: 2, color: "bg-blue-600" },
  { label: "Total Messages", count: 15, color: "bg-green-600" },
  { label: "Active Chats", count: 3, color: "bg-purple-600" },
  { label: "Broadcasts", count: 8, color: "bg-orange-500" },
];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className={`text-white ${item.color} px-4 py-3 rounded-lg shadow-md flex justify-between items-center`}
        >
          <span>{item.label}</span>
          <span className="font-bold text-lg">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageStats;
