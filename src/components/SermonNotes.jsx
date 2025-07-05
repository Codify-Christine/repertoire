// src/components/SermonNotes.jsx
import React from 'react';

const notes = [
  { id: 1, title: 'Faith Over Fear', summary: 'A lesson on courage and trust.' },
  { id: 2, title: 'Walking in Grace', summary: 'Reflections on God’s unconditional love.' },
];

const SermonNotes = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Sermon Notes</h2>
      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="border rounded p-4 bg-white shadow-sm">
            <h3 className="font-medium text-lg">{note.title}</h3>
            <p className="text-sm text-gray-700">{note.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonNotes;
