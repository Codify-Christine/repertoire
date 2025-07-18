

const EventsShortcut = () => {
    const actions = [
  { label: "View Calendar", icon: "📅" },
  { label: "Event History", icon: "🕘" },
  { label: "Notification Settings", icon: "🔔" },
];
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-10">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">Quick Actions</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {actions.map((a, i) => (
          <button
            key={i}
            className="border px-4 py-3 text-sm rounded hover:shadow text-gray-700 flex items-center justify-center gap-2"
          >
            <span>{a.icon}</span> {a.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventsShortcut;
