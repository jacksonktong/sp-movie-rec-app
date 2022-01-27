import React, {useEffect, useState} from 'react';
import Table from '../components/Tables.jsx';

const FavoriteMovies = props => {
  // const array = [];
  const arr1 = [1, 2, 3]
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
        // console.log(array)
        newVal(array)
        return array;
      })
)


  return (
  <div className="favoriteMovies">
    <h1 id="head">Favorited Movies</h1>
    {value}
  </div>
  )
};

export default FavoriteMovies;