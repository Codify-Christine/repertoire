

const FeedbackShortcuts = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-4">Quick Actions</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border p-4 rounded text-center">
          <p className="mb-2 font-medium text-gray-700">Submit Feedback</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Give Feedback
          </button>
        </div>
        <div className="border p-4 rounded text-center">
          <p className="mb-2 font-medium text-gray-700">Share Testimony</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm">
            Share Testimony
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackShortcuts;
