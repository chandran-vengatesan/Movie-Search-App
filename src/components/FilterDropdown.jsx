import React from "react";

const FilterDropdown = ({ type, setType }) => {
  return (
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 cursor-pointer"
    >
      <option value="">All Types</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episode">Episodes</option>
    </select>
  );
};

export default FilterDropdown;
