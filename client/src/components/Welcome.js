import '../Styles/Welcome.css'
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

const Welcome = () => {

  let navigate = useNavigate()

  const url = 'https://apella-server.herokuapp.com/';
  const urlDev = 'http://localhost:3007';

  const handleClick = async () => {
    const id = Date.now();
    await axios.post(`${url}/session`, {
      id,
      movies: [],
    });
    navigate(`/session/${id}`);}

  return (
    <div className={'main-div__button'} >
      <input type="submit" value="Get Started" onClick={handleClick} className={'get-started-button'} />
    </div>
  )
}

export default Welcome
