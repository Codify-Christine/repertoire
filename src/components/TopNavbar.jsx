
import { Bell, Filter, ChevronDown } from "lucide-react";

const TopNavBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white py-4 px-6 rounded-md shadow mb-6">
      <div className="w-full md:w-[400px]">
        <input
          type="text"
          placeholder="Search members, events..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center mt-3 md:mt-0 space-x-4">
        <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <Filter size={18} />
          <span className="text-sm">Filter</span>
        </button>

        <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
          <Bell size={18} />
          <span className="text-sm">Alert Settings</span>
        </button>

        <div className="flex items-center gap-2 border-l pl-4">
          <img
            src="./assets/mafia avatar.jpg"
            alt="Pastor John"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm text-gray-800 font-medium">Pastor John Doe</div>
          <ChevronDown size={18} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
