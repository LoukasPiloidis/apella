import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';
import '../Styles/ListContainer.css';

const ListContainer = ({ movieList }) => {

  const url = 'https://apella-server.herokuapp.com';
  const urlDev = 'http://localhost:3007';

  const { id } = useParams();
  const navigate = useNavigate();

  const [movieRenderer, setMovieRenderer] = useState([]);

  const removeList = async () => {
    await axios.delete(`${url}/session/${id}`);
    navigate('/');
  };

  const removeButton = <input type='submit' value='clear list' className="movie-main-div__remove-btn" onClick={removeList} />;
  
  useEffect(() => {
    setMovieRenderer(movieList.map((film, i) => <Movie key={i} filmData={film} />))
  }, [movieList])
  
  return (
    <div className="movie-main-div" >
      {movieRenderer}
      {movieList.length > 0 && removeButton}
    </div>
  )
}

export default ListContainer
