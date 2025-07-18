   const stats = [
  { label: 'Sermons', value: 156 },
  { label: 'Study Materials', value: 24 },
  { label: 'Downloads', value: 185 },
  { label: 'Shared Items', value: 42 },
  ];

const MediaOverviewStats = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
    {stats.map((s, i) => (
      <div key={i} className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-500">{s.label}</p>
        <p className="text-xl font-bold text-blue-700">{s.value}</p>
      </div>
    ))}
  </div>
);

export default MediaOverviewStats;
