import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-[#f9fafc] min-h-screen text-[#1b2c45] font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e8f0fe] to-[#dbeafe] py-14 text-center px-6 shadow-inner">
        <h1 className="text-4xl font-bold mb-2">Welcome to Living Rock CMS</h1>
        <p className="text-gray-700 text-base max-w-xl mx-auto">
          Empowering ministries, connecting members, and growing together in faith.
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/events" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm font-medium">
            View Events
          </Link>
          <Link to="/member-profile" className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 text-sm font-medium">
            My Profile
          </Link>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {[
          {
            title: 'My Profile',
            description: 'Update member details.',
            link: '/member-profile',
            color: 'bg-blue-600',
            icon: '👤',
          },
          {
            title: 'Ministries & Groups',
            description: 'Explore and join groups.',
            link: '/ministries',
            color: 'bg-green-600',
            icon: '🧑‍🤝‍🧑',
          },
          {
            title: 'Media Library',
            description: 'Sermons and study materials.',
            link: '/media-library',
            color: 'bg-purple-600',
            icon: '🎬',
          },
          {
            title: 'Testimonies',
            description: 'Share your journey.',
            link: '/feedback',
            color: 'bg-orange-500',
            icon: '💬',
          },
          {
            title: 'Donations',
            description: 'Support the ministry.',
            link: '/donations',
            color: 'bg-yellow-500',
            icon: '🙏',
          },
          {
            title: 'Events',
            description: 'See and RSVP upcoming services.',
            link: '/events',
            color: 'bg-cyan-600',
            icon: '📅',
          },
        ].map((card, i) => (
          <Link
            key={i}
            to={card.link}
            className={`rounded-xl shadow-md hover:shadow-lg transition p-5 text-white ${card.color}`}
          >
            <div className="text-3xl mb-2">{card.icon}</div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </Link>
        ))}
      </section>

      {/* Featured Event Banner */}
      <section className="mt-16 px-6 max-w-5xl mx-auto">
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow text-center">
          <h2 className="text-xl font-bold text-[#1b2c45]">Don’t Miss: Youth Revival Weekend!</h2>
          <p className="text-sm text-gray-600 mt-2">Join us this Saturday and Sunday for powerful sessions of praise and teaching.</p>
          <Link
            to="/events"
            className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 bg-[#f1f5f9] p-6 text-center text-[#1b2c45]">
        <h3 className="text-lg font-semibold">Stay connected with your community</h3>
        <p className="text-sm text-gray-600 mt-1">Enable notifications or reach out to your ministry leader to stay in the loop.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link to="/request-help" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Request Help
          </Link>
          <Link to="/share-media" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
            Share Media
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 mt-12 py-4">
        © 2025 Living Rock Ministries. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
