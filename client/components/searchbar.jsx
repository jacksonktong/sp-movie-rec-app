import React, {useState} from 'react';



const SearchBar = props => {
  const [searchVal, setSearchVal] = useState("");
  const [movies, setMovies] = useState([]);
  
  const searchMovies = async (e) => {
    e.preventDefault();
    
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=d1e68187eb909c831424427a60dead22&language=en-US&query=${searchVal}&page=1&include_adult=false`;
    
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
      }catch(err){
        console.error(err);
      }
    };

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
          <div className="moviecard" key={movie.id}>
            <img className="movieimage"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title + ' picture'}
            width="300px"
            height="300px"
            />
            <div className="moviedetails">
              <h3 className="movietitle">{movie.original_title}</h3>
              <p className="releasedate">RELEASE DATE: {movie.release_date}</p>
              <p className="synopsis">Description: {movie.overview}</p>
            </div>
          </div>)}
    </div>
    </>
    )
  };

export default SearchBar;