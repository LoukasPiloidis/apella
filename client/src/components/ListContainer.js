import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const ListContainer = ({ movieList }) => {
  const [movieRenderer, setMovieRenderer] = useState([])

  useEffect(() => {
    setMovieRenderer(movieList.map((film, i) => <Movie key={i} filmData={film} />))
  }, [movieList])
  
  return (
    <div className="movie-main-div" >
      {movieRenderer}
    </div>
  )
}

export default ListContainer
