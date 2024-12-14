import React, { useState } from 'react';
import Filter from '../components/FilterResult';
import Results from '../components/Result';
import { results } from '../data/dataresult';
import '../styles/searchresult.css';
import { Link } from "react-router-dom"; 

const SearchPage = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="container_searchpage">
      <h1 className='topresults-billel'>Recommended For You !"</h1>
      <p className="sub-heading">join schools or take practice quizzes</p>
      <Filter filter={filter} onFilterChange={setFilter} />
      <Results results={results} filter={filter} />
    </div>
  );
};

export default SearchPage;