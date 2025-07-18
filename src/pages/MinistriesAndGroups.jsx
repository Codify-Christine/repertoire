
import MyMinistries from '../components/MyMinistries';
import AvailableMinistries from '../components/AvailableMinistries';
import UpcomingGroupActivities from '../components/UpcomingGroupActivities';
import MinistryActions from '../components/MinistryActions';
import MinistryHelpPanel from '../components/MinistryHelpPanel';


const MinistriesAndGroups = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10 bg-[#f9fafc]">
      <h1 className="text-2xl font-bold text-[#1b2c45] text-center">Ministries & Groups</h1>
      <MyMinistries />
      <AvailableMinistries />
      <UpcomingGroupActivities />
      <MinistryActions />
      <MinistryHelpPanel />
      <FooterInfo />
    </div>
  );
};

export default MinistriesAndGroups;

