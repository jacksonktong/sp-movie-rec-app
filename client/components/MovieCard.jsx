import React from 'react'

const MovieCard = props => {
  const movie = props.movie;
  const favorite = props.favorite;
  return (
    <div className="moviecard">
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
            <button className="favbutton" onClick={() => props.handleFavorite(movie)}>Add to favorites!</button>
          </div>
        </div>
  )
}

export default MovieCard;