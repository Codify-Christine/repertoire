const opportunities = [
  {
    title: 'Church Cleaning',
    date: '2025-01-15',
    time: '09:00 AM - 12:00 PM',
    volunteers: '4/12',
    category: 'Maintenance',
  },
  {
    title: 'Food Drive Coordinator',
    date: '2025-01-20',
    time: '10:00 AM - 4:00 PM',
    volunteers: '3/6',
    category: 'Community',
  },
  {
    title: 'Children\'s Ministry Helper',
    date: '2025-01-26',
    time: '09:00 AM - 11:00 AM',
    volunteers: '2/4',
    category: 'Ministry',
  },
];

const VolunteerOpportunities = () => (
  <div>
    <h2 className="text-xl font-semibold mb-3">Available Volunteer Opportunities</h2>
    <div className="space-y-4">
      {opportunities.map((o, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow">
          <p className="font-semibold">{o.title}</p>
          <p className="text-sm text-gray-700">{o.date} | {o.time}</p>
          <p className="text-sm text-gray-600">Volunteers: {o.volunteers}</p>
          <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
            {o.category}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default VolunteerOpportunities;
