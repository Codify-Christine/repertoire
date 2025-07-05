import React from "react";
import TopNavBar from "./TopNavBar";
import CategoryTabs from "./CategoryTabs";
import AnnouncementCard from "./AnnouncementCard";
import BulletinSection from "./BulletinSection";
import NotificationPreferences from "./NotificationPreferences";

const Notifications = () => {
  return (
    <div className="p-4 md:ml-[250px] min-h-screen bg-[#f9fafc]">
      <TopNavBar />
      <h1 className="text-2xl font-bold text-[#1b2c45] mb-4">Announcements & News</h1>
      <CategoryTabs />

      <div className="mt-6 space-y-4">
        <AnnouncementCard
          title="New Year Service Schedule"
          tag="Urgent"
          author="Church Admin"
          date="2025-01-05"
          description="Join us for special New Year services and events..."
        />
        <AnnouncementCard
          title="Youth Conference Registration Open"
          tag="Events"
          author="Youth Ministry"
          date="2025-01-03"
          description="Register now for the annual youth conference..."
        />
        <AnnouncementCard
          title="Building Fund Update"
          tag="General"
          author="Finance Committee"
          date="2025-01-01"
          description="We've reached 75% of our building fund goal..."
        />
        <AnnouncementCard
          title="Weekly Bulletin Available"
          tag="Bulletin"
          author="Church Secretary"
          date="2024-12-29"
          description="Download this week’s digital bulletin..."
        />
      </div>

      <BulletinSection />
      <NotificationPreferences />
    </div>
  );
};

export default Notifications;
