

const FeedbackCategories = () => {
  const categories = [
  { name: "Sunday Service", count: 17 },
  { name: "Youth Ministry", count: 8 },
  { name: "Church Events", count: 15 },
  { name: "Facilities", count: 6 },
  { name: "Leadership", count: 3 },
  { name: "General", count: 7 },
];
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="text-center border p-3 rounded hover:shadow-sm">
            <p className="text-sm font-semibold text-gray-800">{cat.name}</p>
            <p className="text-xs text-gray-500">{cat.count} feedback</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCategories;
