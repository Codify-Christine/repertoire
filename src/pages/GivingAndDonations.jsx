
import DonationsOverview from '../components/DonationsOverview';
import QuickGive from '../components/QuickGive';
import GivingHistory from '../components/GivingHistory';
import MyPledges from '../components/MyPledges';
import RecurringGiving from '../components/RecurringGiving';

const GivingAndDonations = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center">Giving & Donations</h1>
      <DonationsOverview />
      <QuickGive />
      <GivingHistory />
      <MyPledges />
      <RecurringGiving />
    </div>
  );
};

export default GivingAndDonations;

