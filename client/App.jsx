import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import FavoriteMovies from './containers/FavoriteMovies.jsx';

const App = () => {
  return (
  <div id="mainpage">
    <Router>
      <nav>
        <Link to="/api/favorites">Favorites</Link>
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
