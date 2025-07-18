

const AnnouncementCard = ({ title, tag, author, date, description }) => {
  const tagColors = {
    Urgent: "bg-red-100 text-red-600",
    Events: "bg-orange-100 text-orange-500",
    General: "bg-gray-200 text-gray-700",
    Bulletin: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-[#1b2c45]">{title}</h2>
          <p className="text-sm text-gray-500">By {author} · {date}</p>
        </div>
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${tagColors[tag]}`}>
          {tag}
        </span>
      </div>
      <p className="text-sm mt-2 text-gray-700">{description}</p>
      <div className="text-right mt-3">
        <button className="text-blue-600 hover:underline font-medium text-sm">Read More</button>
      </div>
    </div>
  );
};

export default AnnouncementCard;
