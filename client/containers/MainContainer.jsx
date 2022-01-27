import React from 'react';
import SearchBar from '../components/searchbar.jsx';
import FavBar from '../components/FavBar.jsx';

const MainContainer = props => {
  return (
  <div className="container">
    <h1 id="header">My Movie List</h1>
    <FavBar/>
    <SearchBar/>
  </div>
  )
};

export default MainContainer;