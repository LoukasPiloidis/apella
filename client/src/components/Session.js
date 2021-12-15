/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import '../Styles/Session.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ListContainer from './ListContainer';

const Session = ({ setMovies, title, setTitle }) => {

  let { id } = useParams();

  const [filmTitle, setFilmTitle] = useState();
  const [filmDescription, setFilmDescription] = useState('');
  const [filmImage, setFilmImage] = useState('');
  const [movieList, setMovieList] = useState([]);

  const url = 'https://apella-server.herokuapp.com/';
  const urlDev = 'http://localhost:3007';


  const getSession = async () => {
    const movies = await axios.get(`${url}/session/${id}`);
    setMovieList(movies.data.movies);
  }

  const addMovieToSession = async () => {
    await axios.put(`${url}/session/${id}`, {
      id,
      movies: [{filmTitle, filmDescription, filmImage, votes: 0}],
    });
    getSession();
  }

  const fetchMovie = async title => {
    const film = await axios.get(`${url}/movies/${title}`)
    setMovies(film);
    if (film.data.results[0] === undefined) {
      setFilmDescription('This title does not seem to exist. Please check spelling and try again.');
      setTitle(null);
    } else {
      setFilmTitle(film.data.results[0].title);
      setFilmDescription(film.data.results[0].description);
      setFilmImage(film.data.results[0].image);
    }
  }

  useEffect(() => {
    if (!title) {
      return
    }
    fetchMovie(title);
}, [title]);

  return (
    <div className="main-div__movie-div" >
      <h2>{filmTitle}</h2>
      <p>{filmDescription}</p>
      <img src={filmImage} alt={filmTitle} />
      {title && <input className="main-div__movie-div__button" type='submit' value='choose film' onClick={addMovieToSession} />}
      <ListContainer movieList={movieList}/>
    </div>
  )
}

export default Session
