const materials = [
  { title: 'Faith Workbook', author: 'Pastor Grace M.', downloads: 89 },
  { title: 'Prayer Guide 2025', author: 'Ministry Team', downloads: 142 },
  { title: 'Youth Study Notes', author: 'Youth Coordinator', downloads: 76 },
];

const StudyMaterials = () => (
  <div>
    <h2 className="text-lg font-semibold mb-3">Study Materials</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {materials.map((item, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <p className="font-semibold text-[#1b2c45]">{item.title}</p>
          <p className="text-sm text-gray-600">By {item.author}</p>
          <p className="text-sm text-gray-500 mt-1">📥 Downloads: {item.downloads}</p>
          <button className="mt-3 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
            Download
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default StudyMaterials;
