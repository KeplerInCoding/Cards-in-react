import React from 'react';
import './Navbar.css';

const Navbar = ({ selectedTab, handleTabChange }) => {
  return (
    <nav className="navbar">
      <ul className="tab-list">
        <li
          className={`tab ${selectedTab === 'Your' ? 'active' : ''}`}
          onClick={() => handleTabChange('Your')}
        >
          Your Cards
        </li>
        <li
          className={`tab ${selectedTab === 'All' ? 'active' : ''}`}
          onClick={() => handleTabChange('All')}
        >
          All Cards
        </li>


        <li
          className={`tab ${selectedTab === 'Blocked' ? 'active' : ''}`}
          onClick={() => handleTabChange('Blocked')}
        >
          Blocked Cards
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
