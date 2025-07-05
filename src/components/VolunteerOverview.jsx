const stats = [
  { label: 'Active Duties', value: 2 },
  { label: 'Hours This Month', value: 12 },
  { label: 'Available Roles', value: 3 },
];

const VolunteerOverview = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
    {stats.map((s, idx) => (
      <div key={idx} className="bg-white shadow rounded p-4">
        <p className="text-gray-500">{s.label}</p>
        <p className="text-2xl font-bold">{s.value}</p>
      </div>
    ))}
  </div>
);

export default VolunteerOverview;
