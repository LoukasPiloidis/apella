import React, { useState } from 'react';
import '../Styles/Movie.css';

const Movie = ({ filmData }) => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="movie-main-div__single-div" >
      <p className="movie-main-div__single-div__title" >{filmData.filmTitle} : {counter}</p>
      <input type='submit' value='vote' onClick={increment} className="movie-main-div__single-div__button" />
    </div>
  )
}

export default Movie
