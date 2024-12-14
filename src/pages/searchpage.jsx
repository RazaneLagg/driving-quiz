import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../components/FilterResult';
import Results from '../components/Result';
import { results } from '../data/dataresult';
import '../styles/searchresult.css';

const SearchPage = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const searchQuery = location.state?.query || ''; 

  return (
    <div className="container_searchpage">
      <h1 className='topresults-billel'>
        {searchQuery ? `Top Results For "${searchQuery}"` : 'No Search Term Provided'}
      </h1>
      <p className="sub-heading">Show Results for</p>
      <Filter filter={filter} onFilterChange={setFilter} />
      <Results results={results} filter={filter} />
    </div>
  );
};

export default SearchPage;
