import React from 'react'

const MovieCard = props => {
  const movie = props.movie;
  const favorite = props.favorite;
  return (
    <div className="moviepicture" style={test}>
          <img className="movieimage"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title + ' picture'}
          style={imgobj}
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
const imgobj = {
  width: "259px",
  height: "320px",
  // position: "relative",
  // display: "inline-block",
  // overflow: "hidden",
  // marginRight: "auto",
  // marginLeft: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const test = {
  backgroundColor: "purple",
  margin: "10px 10px 10px 10px",
  position: "relative",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
}

export default MovieCard;