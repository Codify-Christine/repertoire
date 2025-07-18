
import MessageStats from "../components/MessageStats";
import RecentMessages from "../components/RecentMessages";
import ActiveConversations from "../components/ActiveConversations";
import QuickActions from "../components/QuickActions";
import BroadcastMessageBox from "../components/BroadcastMessageBox";

const Communications = () => {
  return (
    <div className="p-4 md:ml-[250px] min-h-screen bg-[#f9fafc]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1b2c45]">Messaging & Communication</h1>
        <div className="flex items-center gap-3">
          <button className="text-sm text-blue-600">Notifications</button>
          <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            + New Message
          </button>
        </div>
      </div>

      <MessageStats />

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <RecentMessages />
        <ActiveConversations />
      </div>

      <QuickActions />
      <BroadcastMessageBox />
    </div>
  );
};

export default Communications;
