import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieList from './Components/MovieList';
import Session from './Components/Session';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  const [movies, setMovies] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    axios.get('http://localhost:3007/movies')
      .then(res => setMovies(res.data.fantasy));
}, []);

  // const getMovie = async id => {
  //   const film = await axios.get(`http://localhost:3001/movies/${id}`);
  //   setState(film.data[0]);
  // }

// const renderAllMovies = movies.map(movie => <Link to={`/movies/${movie.id}`} >{movie.title}</Link>);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< Welcome />} />
        <Route path="/movies" element={<MovieList setTitle={setTitle} title={title} />} />
        <Route path="/session/:id" element={
          <>
            <MovieList setTitle={setTitle} title={title} />
            <Session setMovies={setMovies} title={title} movies={movies} />
          </>} 
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
