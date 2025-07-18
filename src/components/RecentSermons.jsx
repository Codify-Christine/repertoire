const sermons = [
  {
    title: 'Faith in Action',
    speaker: 'Pastor John Doe',
    date: '2025-01-01',
    duration: '1:50',
    views: 156,
    format: 'video',
  },
  {
    title: 'Love Your Neighbor',
    speaker: 'Pastor Mary Smith',
    date: '2024-12-25',
    duration: '30:15',
    views: 203,
    format: 'audio',
  },
  {
    title: 'Walking in Purpose',
    speaker: 'Pastor Mike Johnson',
    date: '2024-12-18',
    duration: '42:00',
    views: 189,
    format: 'video',
  },
];

const RecentSermons = () => (
  <div>
    <h2 className="text-lg font-semibold mb-3">Recent Sermons</h2>
    <div className="space-y-4">
      {sermons.map((s, i) => (
        <div key={i} className="bg-white rounded shadow p-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[#1b2c45]">{s.title}</p>
            <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">{s.format}</span>
          </div>
          <p className="text-sm text-gray-600">{s.speaker} • {s.date} • {s.duration}</p>
          <div className="text-sm text-gray-500 mt-1">👁️ Views: {s.views}</div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Play</button>
            <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">Share</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentSermons;
