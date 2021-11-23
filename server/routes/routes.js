const axios = require('axios');
const db = require('../../database/db.json');

let sessions = [];

const searchMovie = async (req, res) => {
  const { title } = req.params;
  try {
    const movie = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_6hif9516/${title}`)
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(movie.data);
  } catch (error) {
    console.log(error);
  }

  // res.send(db.data);
};

const createSession = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header({ 'Content-Type': 'application/json', 'Location': '/api/session' });
  sessions.push(req.body);
  res.send(201);
}

const getSession = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  const session = sessions.filter(session => session.id === parseInt(id))[0];
  res.status(200).send(session);
}

const updateVotes = (req, res) => {
  const { id } = req.body;
  const { inc } = req.body;
  if (inc !== 1) {
    return;
  };
  sessions.map(session => session.id === parseInt(id) ? session.movies[0].votes += 1 : session);
  console.log(sessions[0].movies);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
};

const updateSession = (req, res) => {
  const { movies } = req.body;
  const { id } = req.params;
  const session = sessions.filter(film => film.id === parseInt(id) ? film.movies.push(movies[0]) : film)[0];
  sessions.map(film => film.id === parseInt(id) ? film = session : film);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
}

const deleteSession = (req, res) => {
  const { id } = req.params;
  const remainingSessions = sessions.filter(film => film.id !== parseInt(id));
  sessions = remainingSessions;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
}

module.exports = { searchMovie, createSession, getSession, updateSession, updateVotes, deleteSession };
