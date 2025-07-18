const available = [
  {
    name: "Men's Fellowship",
    description: 'Fellowship and spiritual growth for men',
    leader: 'Brother Paul',
    members: 28,
  },
  {
    name: 'Ushering Team',
    description: 'Welcome and guide church members',
    leader: 'Sister Mary',
    members: 18,
  },
  {
    name: 'Sunday School',
    description: 'Teaching and nurturing children',
    leader: 'Teacher Sarah',
    members: 15,
  },
];

const AvailableMinistries = () => (
  <div>
    <h2 className="text-lg font-semibold text-[#1b2c45] mb-4">Available Ministries</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {available.map((ministry, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow border border-gray-100 hover:shadow-md transition space-y-2">
          <p className="font-bold text-[#1b2c45]">{ministry.name}</p>
          <p className="text-sm text-gray-600">{ministry.description}</p>
          <p className="text-sm text-gray-600">👤 Leader: {ministry.leader}</p>
          <p className="text-sm text-gray-600">👥 Members: {ministry.members}</p>
          <button className="mt-2 px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
            Join Ministry
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default AvailableMinistries;
