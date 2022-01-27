import React, {useEffect, useState} from 'react';
import Table from '../components/Tables.jsx';

const FavoriteMovies = props => {
  let [value, newVal] = useState([]);

  useEffect(() => 
     fetch('/api/favorites')
      .then((response) =>  response.json())
      .then((data) => {
        // console.log('data', data)
        const array = [];
        data.forEach((val) =>{
          array.push(<Table key={val._id} title={val.title} date={val.releasedate}/>)
        })
        newVal(array)
        return array;
      })
, [])
console.log(value)

  return (
  <div className="favoriteMovies">
    <h1 id="head">Favorited Movies</h1>
    <table>
      <thead>
        <tr>
          <th>Movie Title</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {value}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
};

export default FavoriteMovies;