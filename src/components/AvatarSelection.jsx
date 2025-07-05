// src/components/AvatarSelection.jsx
import React, { useState } from 'react';
import AvatarBuilder from './AvatarBuilder';
import AvatarFromPhoto from './AvatarFromPhoto';

const AvatarSelection = () => {
  const [option, setOption] = useState('builder');

  return (
    <div className="space-y-6 bg-white p-6 rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold">Choose Your Avatar Style</h2>

      {/* Option Selector */}
      <div className="flex gap-4">
        <button
          onClick={() => setOption('builder')}
          className={`px-4 py-2 rounded ${
            option === 'builder' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Build Avatar
        </button>
        <button
          onClick={() => setOption('photo')}
          className={`px-4 py-2 rounded ${
            option === 'photo' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Generate from Photo
        </button>
      </div>

      {/* Render Chosen Component */}
      {option === 'builder' ? <AvatarBuilder /> : <AvatarFromPhoto />}
    </div>
  );
};

export default AvatarSelection;
