import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ListContainer from './ListContainer';
import MovieList from './MovieList';

const Session = ({ setMovies, movies, title }) => {

  let { id } = useParams();

  const [filmTitle, setFilmTitle] = useState();
  const [filmDescription, setFilmDescription] = useState();
  const [filmImage, setFilmImage] = useState();
  const [movieList, setMovieList] = useState([]);


  const getSession = async () => {
    const movies = await axios.get(`http://localhost:3007/session/${id}`);
    setMovieList(movies.data.movies);
    console.log(movies.data.movies);
    
  }

  const addMovieToSession = async () => {
    await axios.put(`http://localhost:3007/session/${id}`, {
      id,
      movies: [{filmTitle, filmDescription, filmImage}],
    });
    getSession();
  }

  const fetchMovie = async title => {
    const film = await axios.get(`http://localhost:3007/movies/${title}`)
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
      <ListContainer movieList={movieList}/>
    </div>
  )
}

export default Session
