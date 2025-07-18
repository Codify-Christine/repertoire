

const feedbacks = [
  {
    title: "Sunday Service Feedback",
    rating: 5,
    comment: "Wonderful service today. The message was very inspiring...",
    date: "2025-01-01",
  },
  {
    title: "Youth Conference Feedback",
    rating: 4,
    comment: "Great event, would love more interactive sessions...",
    date: "2024-12-20",
  },
];

const MyFeedback = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-[#1b2c45]">📝 My Recent Feedback</h3>
      <div className="space-y-4">
        {feedbacks.map((f, i) => (
          <div key={i} className="border p-3 rounded hover:shadow-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-800">{f.title}</p>
              <span className="text-xs text-gray-500">{f.date}</span>
            </div>
            <div className="text-yellow-500 text-sm mt-1">{"★".repeat(f.rating)}</div>
            <p className="text-sm text-gray-600 mt-1">{f.comment}</p>
            <button className="mt-2 text-blue-600 text-sm hover:underline">View Details</button>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="text-sm text-blue-600 hover:underline font-medium">View All Feedback</button>
      </div>
    </div>
  );
};

export default MyFeedback;
