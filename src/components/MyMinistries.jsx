const ministries = [
  {
    name: 'Youth Ministry',
    role: 'Member',
    nextMeeting: '2025-01-01',
    leader: 'Pastor Mike',
    members: 45,
  },
  {
    name: 'Choir',
    role: 'Member',
    nextMeeting: '2025-01-06',
    leader: 'Sister Grace',
    members: 32,
  },
];

const MyMinistries = () => (
  <div>
    <h2 className="text-lg font-semibold text-[#1b2c45] mb-4">My Ministries</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {ministries.map((m, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow border border-gray-100 hover:shadow-md transition space-y-2">
          <p className="font-bold text-[#1b2c45]">{m.name}</p>
          <p className="text-sm text-gray-600">👤 Role: {m.role}</p>
          <p className="text-sm text-gray-600">🗓️ Next Meeting: {m.nextMeeting}</p>
          <p className="text-sm text-gray-600">🧑‍🤝‍🧑 Leader: {m.leader}</p>
          <p className="text-sm text-gray-600">👥 Members: {m.members}</p>
          <div className="flex gap-2 pt-2">
            <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Chat</button>
            <button className="px-4 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">Schedule</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MyMinistries;
