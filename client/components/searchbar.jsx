import React, {useState} from 'react';
import MovieCard from './MovieCard.jsx';


const SearchBar = props => {
  const [searchVal, setSearchVal] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorite] = useState([]);
  
  const searchMovies = async (e) => {
    e.preventDefault();
    
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d1e68187eb909c831424427a60dead22&language=en-US&query=${searchVal}&page=1&include_adult=false`;
    
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      //console.log(data.results);
      setMovies(data.results);
      }catch(err){
        console.error(err);
      }
    };

    const addFavorite = (value) => {
      const newVal = {
        title: value.original_title,
        releasedate: value.release_date
      }
      // console.log(newVal);
      // setFavorite(value);
      fetch('/api/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVal),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success', data);
      })
      .catch((error) => {
        console.error('Error', error);
      })
    }

    return (
    <>
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query">
        <span className="placeholder">Search for Movies!</span>
      </label>
      <input 
        className="input"
        type="text"
        id="movie-search"
        placeholder="Movies"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button className="button" type="submit">Search</button>
    </form>
    <div className="movie-list">
        {movies.map(movie=>
          <MovieCard movie={movie} key={movie.id} handleFavorite={addFavorite}/>)}
    </div>
    </>
    )
  };

export default SearchBar;