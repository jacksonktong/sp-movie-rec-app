import React from 'react';

const FavBar = props => {

return (
  <div>
    <a href ="http://localhost:8080/favorites">
    <input type="button" 
    className="redirectbutton" 
    id="favorites"
    value="My Favorites"
    />
    </a>
  </div>
  )
};

export default FavBar;