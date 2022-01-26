import React from 'react';

  const SearchBar = props => {
    <form method="get">
      <label htmlFor="movie-search">
        <span className="placeholder">Search for Movies!</span>
      </label>
      <input 
        type="text"
        id="movie-search"
        placeholder="Movies"
      />
      <button type="submit">Search</button>
    </form>
  };

export default SearchBar;