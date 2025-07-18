

const FeedbackStats = () => {
    const stats = [
  { label: "Feedback Given", count: 8, color: "bg-blue-600" },
  { label: "Testimonies Shared", count: 2, color: "bg-green-600" },
  { label: "Average Rating", count: "4.5", color: "bg-yellow-500" },
  { label: "Total Views", count: 45, color: "bg-purple-600" },
];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div key={i} className={`${item.color} text-white p-4 rounded-lg shadow-md`}>
          <p>{item.label}</p>
          <h3 className="text-xl font-bold">{item.count}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeedbackStats;
