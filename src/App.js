import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Filter from './components/Filter';
import CardList from './components/CardList';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Your');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState([]);
  const [filterCardholder, setFilterCardholder] = useState('');

  useEffect(() => {
    // Simulating API call to fetch cards data
    fetchCardsData();
  }, []);

  const fetchCardsData = () => {
    // Simulating API response
    const mockApiResponse = {
      data: [
        {
          id: 1,
          name: 'Mixmax',
          budget_name: 'Software subscription',
          owner_id: 1,
          spent: { value: 100, currency: 'SGD' },
          available_to_spend: { value: 1000, currency: 'SGD' },
          card_type: 'burner',
          expiry: '9 Feb',
          limit: 100,
          status: 'active',
          cardholder: 'John'
        },
        // Add more card objects here
        {
          id: 2,
          name: 'Card 2',
          budget_name: 'Budget 2',
          owner_id: 2,
          spent: { value: 200, currency: 'SGD' },
          available_to_spend: { value: 800, currency: 'SGD' },
          card_type: 'subscription',
          expiry: '10 Feb',
          limit: 200,
          status: 'active',
          cardholder: 'Jane'
        },
        {
          name: 'Quickbooks’',
          budget_name: 'Software subscription',
          owner_id: 2,
          spent: {value: 50, currency: "SGD"},
          available_to_spend: {value: 250,currency: "SGD"
        },
        card_type: "subscription",
        limit: 10,
        status: 'active'
        },
        // Add more card objects here
      ],
      page: 1,
      per_page: 10,
      total: 100
    };

    // Simulating pagination
    const start = (page - 1) * mockApiResponse.per_page;
    const end = start + mockApiResponse.per_page;

    // Mock API response data
    const paginatedData = mockApiResponse.data.slice(start, end);

    // Simulating delay for API response
    setTimeout(() => {
      setCards((prevCards) => [...prevCards, ...paginatedData]);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCards([]);
    setPage(1);
    // Simulating API call to fetch cards data based on selected tab
    fetchCardsData();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterTypeChange = (selectedTypes) => {
    setFilterType(selectedTypes);
  };

  const handleFilterCardholderChange = (event) => {
    setFilterCardholder(event.target.value);
  };

  return (
    <div className="app">
      <Navbar selectedTab={selectedTab} handleTabChange={handleTabChange} />
      {selectedTab === 'Your' && (
        <>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
          <Filter
            filterType={filterType}
            filterCardholder={filterCardholder}
            handleFilterTypeChange={handleFilterTypeChange}
            handleFilterCardholderChange={handleFilterCardholderChange}
          />
        </>
      )}
      <CardList
        cards={cards}
        searchTerm={searchTerm}
        filterType={filterType}
        filterCardholder={filterCardholder}
      />
    </div>
  );
};

export default App;
