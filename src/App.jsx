import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Communications from "./pages/Communications";
import GivingAndDonations from "./pages/GivingAndDonations";
import MinistriesGroups from "./pages/MinistriesAndGroups";
import Notifications from "./pages/Notifications";
import FeedbackTestimonies from "./pages/FeedbackAndTestimonies";
import ResourcesMedia from "./pages/ResourcesAndMedia";
import Settings from "./pages/Settings";
import SpiritualJourney from "./pages/SpiritualJourney";
import VolunteerService from "./pages/VolunteerService";
import MemberProfile from "./pages/MemberProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="communications" element={<Communications />} />
          <Route path="givinganddonations" element={<GivingAndDonations />} />
          <Route path="ministriesandgroups" element={<MinistriesGroups />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="feedbackandtestimonies" element={<FeedbackTestimonies />} />
          <Route path="resourcesandmedia" element={<ResourcesMedia />} />
          <Route path="settings" element={<Settings />} />
          <Route path="spiritualjourney" element={<SpiritualJourney />} />
          <Route path="volunteerservice" element={<VolunteerService />} />
          <Route path="memberprofile" element={<MemberProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
