// src/components/AvatarBuilder.jsx
import React, { useState } from 'react';

const AvatarBuilder = () => {
  const [seed, setSeed] = useState('cool-cat');

  const avatarUrl = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${encodeURIComponent(seed)}`;

  return (
    <div className="space-y-4">
      <img src={avatarUrl} alt="Generated Avatar" className="w-32 h-32 mx-auto" />

      <input
        type="text"
        placeholder="Type a name or seed"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        className="w-full border p-2 rounded"
      />
    </div>
  );
};

export default AvatarBuilder;
