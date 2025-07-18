
import VolunteerOverview from '../components/VolunteerOverview';
import UpcomingDuties from '../components/UpcomingDuties';
import VolunteerOpportunities from '../components/VolunteerOpportunities';
import ServiceHistory from '../components/ServiceHistory';
import FooterInfo from '../components/FooterInfo';

const VolunteerService = () => {
  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search members, events..."
          className="border p-2 rounded w-full md:w-2/3"
        />
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-semibold">Pastor John Doe</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">My Schedule</button>
        </div>
      </div>

      <VolunteerOverview />
      <UpcomingDuties />
      <VolunteerOpportunities />
      <ServiceHistory />
      <FooterInfo />
    </div>
  );
};

export default VolunteerService;
