import React from 'react';
import ResultItem from './Resultitem';
import '../styles/searchresult.css';

const Results = ({ results, filter }) => (
  <div className="results-billel">
    {results
      .filter((item) => filter === 'all' || item.category === filter)
      .map((item) => (
        <ResultItem key={item.id} item={item} />
      ))}
  </div>
);

export default Results;