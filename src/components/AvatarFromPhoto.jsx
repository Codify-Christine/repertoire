// src/components/AvatarFromPhoto.jsx
import React, { useState } from 'react';

const AvatarFromPhoto = () => {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleUpload} />

      {preview && (
        <img src={preview} alt="Uploaded" className="w-32 h-32 object-cover rounded-full mx-auto border-2" />
      )}

      {/* Optional: Add a submit button to POST to a backend */}
    </div>
  );
};

export default AvatarFromPhoto;
