import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import '../Styles/Movie.css';

const Movie = ({ filmData }) => {

  const { id } = useParams();

  const [counter, setCounter] = useState(0);

  const url = 'https://apella-server.herokuapp.com';
  const urlDev = 'http://localhost:3007';

  const getData = async () => {
    const movies = await axios.get(`${url}/session/${id}`);
    const movie = movies.data.movies.find(film => film.filmTitle === filmData.filmTitle);
    setCounter(movie.votes);
  }

  const increment = async () => {
    await axios.put(`${url}/session/1`, {
    id,
    inc: 1,
    title: filmData.filmTitle,
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
