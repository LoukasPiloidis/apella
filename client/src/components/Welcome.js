import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

const Welcome = () => {

  let navigate = useNavigate()

  const handleClick = async () => {
    const id = Date.now();
    await axios.post("http://localhost:3007/session", {
      id,
      movies: [],
    });
    navigate(`/session/${id}`);}

  return (
    <div>
      <input type="submit" value="Get Started" onClick={handleClick}/>
    </div>
  )
}

export default Welcome
