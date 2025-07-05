const history = [
  { event: 'Sunday Service Usher', date: 'Dec 29, 2024', hours: 3 },
  { event: 'Christmas Event Helper', date: 'Dec 25, 2024', hours: 5 },
  { event: 'Youth Ministry Assistant', date: 'Dec 22, 2024', hours: 4 },
];

const ServiceHistory = () => (
  <div>
    <h2 className="text-xl font-semibold mb-3">Service History</h2>
    <ul className="space-y-2">
      {history.map((h, idx) => (
        <li key={idx} className="border p-3 rounded shadow-sm bg-white flex justify-between">
          <div>
            <p className="font-medium">{h.event}</p>
            <p className="text-sm text-gray-600">{h.date}</p>
          </div>
          <p className="text-sm font-semibold text-right">{h.hours} hrs</p>
        </li>
      ))}
    </ul>
    <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
      View Full History
    </button>
  </div>
);

export default ServiceHistory;
