import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import '../Styles/Movie.css';

const Movie = ({ filmData }) => {

  const { id } = useParams();

  const [counter, setCounter] = useState(0);

  const getData = async () => {
    const movies = await axios.get(`http://localhost:3007/session/${id}`);
    setCounter(movies.data.movies[0].votes);
  }

  const increment = async () => {
    await axios.put(`http://localhost:3007/session/1`, {
    id,
    inc: 1,
    });
    getData();
  };

  return (
    <div className="movie-main-div__single-div" >
      <p className="movie-main-div__single-div__title" >{filmData.filmTitle} : {counter}</p>
      <input type='submit' value='vote' onClick={increment} className="movie-main-div__single-div__button" />
    </div>
  )
}

export default Movie
