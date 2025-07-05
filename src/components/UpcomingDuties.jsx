const duties = [
  {
    role: 'Usher',
    service: 'Sunday Service',
    date: '2025-01-12',
    time: '08:30 AM',
    status: 'Confirmed',
  },
  {
    role: 'Audio/Visual',
    service: 'Youth Service',
    date: '2025-01-19',
    time: '09:00 AM',
    status: 'Pending',
  },
];

const UpcomingDuties = () => (
  <div>
    <h2 className="text-xl font-semibold mb-3">My Upcoming Duties</h2>
    <div className="space-y-3">
      {duties.map((duty, idx) => (
        <div
          key={idx}
          className="border-l-4 pl-4 py-2 bg-gray-50 rounded shadow-sm border-blue-500"
        >
          <p className="font-semibold">{duty.role}</p>
          <p className="text-sm text-gray-600">
            {duty.service} — {duty.date} at {duty.time}
          </p>
          <span
            className={`inline-block mt-1 px-2 py-1 text-xs rounded ${
              duty.status === 'Confirmed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
            }`}
          >
            {duty.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingDuties;
