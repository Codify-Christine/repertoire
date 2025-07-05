import React from "react";

const categories = [
  { label: "Urgent", count: 1, color: "bg-red-600" },
  { label: "Events", count: 1, color: "bg-orange-400" },
  { label: "Bulletins", count: 1, color: "bg-blue-600" },
  { label: "General", count: 1, color: "bg-gray-700" },
];

const CategoryTabs = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <div
          key={cat.label}
          className={`flex justify-between items-center text-white px-4 py-3 rounded-lg ${cat.color} shadow-md`}
        >
          <span>{cat.label}</span>
          <span className="font-bold">{cat.count}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
