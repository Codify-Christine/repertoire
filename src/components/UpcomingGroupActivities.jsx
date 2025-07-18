const activities = [
  {
    title: 'Youth Ministry Retreat',
    date: 'January 15–17, 2025',
  },
  {
    title: 'Choir Practice',
    date: 'Every Tuesday • 7:00 PM',
  },
];

const UpcomingGroupActivities = () => (
  <div>
    <h2 className="text-lg font-semibold text-[#1b2c45] mb-4">Upcoming Group Activities</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {activities.map((a, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow border border-gray-100 hover:shadow-md transition space-y-2">
          <p className="font-bold text-[#1b2c45]">{a.title}</p>
          <p className="text-sm text-gray-600">🗓️ {a.date}</p>
          <button className="px-4 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingGroupActivities;
