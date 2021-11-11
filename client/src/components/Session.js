import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Session = ({ setMovies, movies, title }) => {

  let { id } = useParams();

  const [filmTitle, setFilmTitle] = useState();
  const [filmDescription, setFilmDescription] = useState();
  const [filmImage, setFilmImage] = useState();
  const [filmRating, setFilmRating] = useState();

  const addMovieToSession = async () => {
    await axios.put(`http://localhost:3007/session/${id}`, {
      id,
      movies: [{filmTitle, filmDescription, filmImage}],
    });
  }

  const fetchMovie = async title => {
    console.log(title);
    const film = await axios.get(`http://localhost:3007/movies/${title}`)
    console.log(film.data.results[0]);
    setMovies(film);
    setFilmTitle(film.data.results[0].title);
    setFilmDescription(film.data.results[0].description);
    setFilmImage(film.data.results[0].image);
  }

  useEffect(() => {
    fetchMovie(title);
}, [title]);

  return (
    <div>
      <h2>{filmTitle}</h2>
      <p>{filmDescription}</p>
      <img src={filmImage} />
      <input type='submit' value='choose film' onClick={addMovieToSession} />
    </div>
  )
}

export default Session
