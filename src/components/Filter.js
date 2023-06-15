import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ filterType, filterCardholder, handleFilterTypeChange, handleFilterCardholderChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleTypeCheckboxChange = (event) => {
    const { value, checked } = event.target;
    handleFilterTypeChange(value, checked);
  };

  return (
    <div className="filter-container">
      <button className="filter-icon" onClick={handleFilterClick}>
        <i className="fas fa-filter"></i>
      </button>
      {isFilterOpen && (
        <div className="filter-overlay" onClick={handleFilterClick}>
          <div className="filter-options">
            <label className="filter-option">
              <input
                type="checkbox"
                value="subscription"
                checked={filterType.includes('subscription')}
                onChange={handleTypeCheckboxChange}
              />
              Subscription
            </label>
            <label className="filter-option">
              <input
                type="checkbox"
                value="burner"
                checked={filterType.includes('burner')}
                onChange={handleTypeCheckboxChange}
              />
              Burner
            </label>
          </div>
          <div className="filter-dropdown">
            <label className="filter-label">Cardholder:</label>
            <select
              className="filter-select"
              value={filterCardholder}
              onChange={handleFilterCardholderChange}
            >
              <option value="">All</option>
              <option value="John">John</option>
              <option value="Jane">Jane</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
