// src/components/EventListCard.jsx
const EventListCard = ({ title, type, date, time, location, hasRSVP }) => {
  const badgeStyles = {
    Service: "bg-[#e1efff] text-[#0070f3]",
    Conference: "bg-[#fff4e6] text-[#d97706]",
    Study: "bg-[#f3e8ff] text-[#8b5cf6]",
    default: "bg-gray-100 text-gray-600",
  };

  const badge = badgeStyles[type] || badgeStyles.default;

  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 transition hover:shadow-xl">
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#1b2c45]">{title}</h3>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${badge}`}>
            {type}
          </span>
        </div>

        <div className="text-sm text-gray-700 space-y-1">
          <p>📅 <strong>Date:</strong> {date}</p>
          <p>🕒 <strong>Time:</strong> {time}</p>
          <p>📍 <strong>Location:</strong> {location}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-3">
          {hasRSVP && (
            <button className="bg-[#f97316] text-white text-sm px-4 py-2 rounded-md hover:bg-[#ea580c] transition">
              RSVP
            </button>
          )}
          <button className="text-sm border border-[#1b2c45] text-[#1b2c45] px-4 py-2 rounded-md hover:bg-[#1b2c45] hover:text-white transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventListCard;
