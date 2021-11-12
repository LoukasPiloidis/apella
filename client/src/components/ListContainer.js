import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';

const ListContainer = ({ movieList }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [movieRenderer, setMovieRenderer] = useState([]);

  const removeList = async () => {
    console.log(id);
    await axios.delete(`http://localhost:3007/session/${id}`);
    navigate('/');
  };

  const removeButton = <input type='submit' value='clear list' className="movie-main-div__remove-btn" onClick={removeList} />;
  
  useEffect(() => {
    setMovieRenderer(movieList.map((film, i) => <Movie key={i} filmData={film} />))
  }, [movieList])
  
  return (
    <div className="movie-main-div" >
      {movieRenderer}
      <p>{movieList.length > 0 && removeButton}</p>
    </div>
  )
}

export default ListContainer
