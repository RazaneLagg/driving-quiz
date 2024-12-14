import React, { useState } from "react";

const Filters = ({ onFilterSelect }) => {
  const [activeFilter, setActiveFilter] = useState("latest");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterSelect(filter); 
  };

  const filters = ["latest", "practice", "mock tests", "beginner", "intermediate"];

  return (
    <div className="filters-khadija">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn-khadija ${activeFilter === filter ? "active" : ""}`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
