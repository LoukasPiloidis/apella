import React, { useState } from 'react';

const Movie = ({ filmData }) => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      {filmData.filmTitle}
      <p>{counter}</p>
      <input type='submit' value='vote' onClick={increment} />
    </div>
  )
}

export default Movie
