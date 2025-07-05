import React from 'react';
import AvatarSelection from '../components/AvatarSelection';

const MemberProfile = () => {
  // Sample fallback data for now
  const member = {
    name: 'John Doe',
    role: 'Administrator',
    joined: '2022-01-15',
    baptized: true,
    groups: ['Choir Team', 'Youth Fellowship'],
    email: 'john@example.com',
    phone: '+254712345678',
    address: '123 Faith St, Hope City',
    photo: './assets/mafia avatar.jpg',
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* 📸 Profile Card */}
      <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={member.photo}
          alt={member.name}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500"
        />
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{member.name}</h2>
          <p className="text-gray-600">{member.role}</p>
          <p className="text-sm text-gray-500">Joined: {member.joined}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {member.baptized && (
              <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full">
                Baptized ✔️
              </span>
            )}
            {member.groups.map((group, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 📬 Contact Info */}
      <div className="bg-white shadow rounded p-6 space-y-2">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone:</strong> {member.phone}</p>
        <p><strong>Address:</strong> {member.address}</p>
      </div>

      {/* 🛠️ Avatar Editor */}
      <AvatarSelection />
    </div>
  );
};

export default MemberProfile;
