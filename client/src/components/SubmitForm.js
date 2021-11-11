import React from 'react';
import '../Styles/SubmitForm.css';

const MovieList = ({ setTitle }) => {

  const getMovie = e => {
    e.preventDefault();
    const value = e.target.children[0].value;
    setTitle(value);
    e.target.reset();
  }
  
  return (
    <form onSubmit={getMovie} className="form-main-div">
      <input type="text" placeholder="search for a movie title" />
      <input type="submit" value="search" />
    </form>
  )
}

export default MovieList
