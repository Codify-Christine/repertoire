
import FeedbackStats from "../components/FeedbackStats";
import MyFeedback from "../components/MyFeedback";
import MyTestimonies from "../components/MyTestimonies";
import FeedbackCategories from "../components/FeedbackCategories";
import FeedbackShortcuts from "../components/FeedbackShortcuts";
import RequestHelpSection from "../components/RequestHelpSection";

const FeedbackAndTestimonies = () => {
  return (
    <div className="p-4 md:ml-[250px] min-h-screen bg-[#f9fafc]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1b2c45]">Feedback & Testimonies</h1>
        <div className="flex gap-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm">Share Testimony</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">Give Feedback</button>
        </div>
      </div>

      <FeedbackStats />

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <MyFeedback />
        <MyTestimonies />
      </div>

      <FeedbackCategories />
      <FeedbackShortcuts />
      <RequestHelpSection />
    </div>
  );
};

export default FeedbackAndTestimonies;

