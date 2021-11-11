import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Session from './components/Session';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [movies, setMovies] = useState();
  const [title, setTitle] = useState(null);

  return (
    <div className={'main-div'} >
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
    </div>
  );
}

export default App;
