

const RequestHelpSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-10 text-center">
      <h3 className="text-lg font-semibold text-[#1b2c45] mb-2">Request Follow-up or Counseling</h3>
      <p className="text-sm text-gray-600 mb-4">
        Need prayer, counseling, or want to speak with a pastor?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button className="border px-4 py-2 rounded text-sm text-gray-700 hover:shadow">Request Prayer</button>
        <button className="border px-4 py-2 rounded text-sm text-gray-700 hover:shadow">Book Counseling</button>
        <button className="border px-4 py-2 rounded text-sm text-gray-700 hover:shadow">Contact Pastor</button>
      </div>
    </div>
  );
};

export default RequestHelpSection;
