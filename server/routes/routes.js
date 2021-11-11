const axios = require('axios');

const sessions = [];

// const getAllMovies = (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send(200, movies)
// };

// const getMovie = (req, res) => {
//   try {
//       const { id } = req.params;
//       const movie = movies.fantasy.filter(item => item.id === id);
//       res.header("Access-Control-Allow-Origin", "*");
//       res.send(200, movie);
//   } catch (err) {
//       res.send(404, err.message);
//   }
// }

const searchMovie = async (req, res) => {
  const { title } = req.params;
  const movie = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_i3xynik2/${title}`)
  res.header("Access-Control-Allow-Origin", "*");
  res.send(200, movie.data);
};

const createSession = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header({ 'Content-Type': 'application/json', 'Location': '/api/session' });
  sessions.push(req.body);
  // console.log(sessions);
  res.send(201);
}

const getSession = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;
  sessions.filter(session => session.id === id);
  res.send(200);
}

const updateSession = (req, res) => {
  const { movies } = req.body;
  // console.log('log', movies[0].filmTitle);
  const { id } = req.body;
  sessions.map(film => film.id === parseInt(id) ? film.movies = movies[0] : film);
  console.log(sessions);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
}

module.exports = { searchMovie, createSession, getSession, updateSession };
