const SearchArchiveForm = () => (
  <div className="bg-white p-6 rounded shadow text-center space-y-4">
    <h2 className="text-lg font-semibold">Search Media Archive</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Keyword or Title"
        className="border p-2 rounded w-full"
      />
      <select className="border p-2 rounded w-full">
        <option value="">Select Category</option>
        <option value="sermon">Sermons</option>
        <option value="study">Study Material</option>
        <option value="testimony">Testimonies</option>
      </select>
    </div>
    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
      Search
    </button>
  </div>
);

export default SearchArchiveForm;
