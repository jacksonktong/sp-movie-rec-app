import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import FavoriteMovies from './containers/FavoriteMovies.jsx';
// import css from './stylesheets/styles.css';

// const grabFavMovies = () =>{
//   fetch('/api/favorites')
//     .then((response) => response.json())
//     .then((data) => {
//       return console.log(data)
//     });
// }

const App = () => {
  return (
  <div id="mainpage">
    <Router>
      <nav className="rightnav">
      <p>
      <Link to="/"><button type="button" className="homebutton">Home</button></Link>
      </p>
      <Link to="/api/favorites"><button type="button" className="favmoviebutton">Favorites</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/api/favorites" element={<FavoriteMovies/>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
