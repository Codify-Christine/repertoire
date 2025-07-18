const MinistryHelpPanel = () => (
  <div className="bg-blue-50 p-6 rounded-xl shadow border border-blue-200 text-center mt-10 space-y-3">
    <h3 className="text-lg font-semibold text-blue-800">
      Need help joining, creating, or managing a ministry?
    </h3>
    <div className="flex flex-wrap justify-center gap-3">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Contact Coordinator
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Request Group Training
      </button>
    </div>
  </div>
);

export default MinistryHelpPanel;
