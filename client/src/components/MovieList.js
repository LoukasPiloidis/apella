import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const MovieList = ({ setTitle, title }) => {

  const navigate = useNavigate();

  const getMovie = e => {
    e.preventDefault();
    const value = e.target.children[0].value;
    setTitle(value);
    e.target.reset();
    // navigate(`/movies/${value}`);
  }
  
  return (
    <form onSubmit={getMovie}>
      <input type="text" placeholder="search for a movie title" />
      <input type="submit" value="search" />
    </form>
  )
}

export default MovieList
