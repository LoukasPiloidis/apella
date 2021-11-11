import React from 'react';
import Movie from './Movie';

const ListContainer = ({ movieList }) => {

  console.log(movieList);

  const movieRenderer = movieList.map((film, i) => <Movie key={i} filmData={film} />)
  
  return (
    <div>
      {movieRenderer}
    </div>
  )
}

export default ListContainer
