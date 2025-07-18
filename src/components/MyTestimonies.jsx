

const testimonies = [
  {
    title: "God's Healing Power",
    status: "published",
    views: 45,
    date: "2024-12-25",
  },
  {
    title: "Financial Breakthrough",
    status: "pending",
    views: 0,
    date: "2024-12-15",
  },
];

const MyTestimonies = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-[#1b2c45]">🙌 My Testimonies</h3>
      <div className="space-y-4">
        {testimonies.map((t, i) => (
          <div key={i} className="border p-3 rounded hover:shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-800">{t.title}</p>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  t.status === "published" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {t.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{t.views} views • {t.date}</p>
            <div className="flex gap-2 mt-2">
              <button className="text-sm text-gray-600 hover:underline">Edit</button>
              {t.status === "published" && (
                <button className="text-sm text-blue-600 hover:underline">Share</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTestimonies;
