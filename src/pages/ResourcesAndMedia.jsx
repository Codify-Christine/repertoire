
import MediaOverviewStats from '../components/MediaOverviewStats';
import RecentSermons from '../components/RecentSermons';
import StudyMaterials from '../components/StudyMaterials';
import SearchArchiveForm from '../components/SearchArchiveForm';
import ShareMediaPanel from '../components/ShareMediaPanel';

const ResourcesAndMedia = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10 bg-[#f9fafc]">
      <HeaderBar />
      <h1 className="text-2xl font-bold text-center text-[#1b2c45]">Resources & Media Library</h1>
      <MediaOverviewStats />
      <RecentSermons />
      <StudyMaterials />
      <SearchArchiveForm />
      <ShareMediaPanel />
      <FooterInfo />
    </div>
  );
};

export default ResourcesAndMedia;
