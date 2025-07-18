
import EventListCard from "../components/EventListCard";
import QuickActions from "../components/QuickActions";

const events = [
  {
    title: "Sunday Service",
    type: "Service",
    date: "2025-01-07",
    time: "09:00 AM",
    location: "Main Sanctuary",
    hasRSVP: false,
  },
  {
    title: "Youth Conference",
    type: "Conference",
    date: "2025-01-12",
    time: "02:00 PM",
    location: "Fellowship Hall",
    hasRSVP: true,
  },
  {
    title: "Bible Study",
    type: "Study",
    date: "2025-01-15",
    time: "07:00 PM",
    location: "Room 201",
    hasRSVP: false,
  },
];

const Events = () => {
  return (
    <div className="p-4 md:ml-[250px] min-h-screen bg-[#f9fafc]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1b2c45]">Events & Services</h1>
        <button className="text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50">
          Set Reminders
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {events.map((event, i) => (
          <EventListCard key={i} {...event} />
        ))}
      </div>

      <QuickActions />
    </div>
  );
};

export default Events;
