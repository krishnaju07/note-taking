import React from 'react';

const Search = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search notes..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default Search;
