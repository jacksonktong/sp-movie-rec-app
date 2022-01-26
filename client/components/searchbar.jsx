import React, {useState} from 'react';
import axios from "axios";

const api = "https://api.themoviedb.org/3/search/movie?api_key=d1e68187eb909c831424427a60dead22&language=en-US&query=templit&page=1&include_adult=false"

  const SearchBar = props => {
    const [searchVal, setSearchVal] = useState("");
    
    return (
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
    )
  };

export default SearchBar;