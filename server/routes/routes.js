const axios = require('axios');

const database = {
  data: {
    results: [
      {
        description: "(2006) (Video)",
        id: "tt1436480",
        image: "https://imdb-api.com/images/original/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_Ratio0.7273_AL_.jpg",
        resultType: "Title",
        title: "Undefined"
      }
    ]
  },
}

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
  // const movie = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_6hif9516/${title}`)
  res.header("Access-Control-Allow-Origin", "*");
  // res.send(200, movie.data);
  res.send(database.data);
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
  const session = sessions.filter(session => session.id === parseInt(id))[0];
  // console.log(session);
  res.status(200).send(session);
}

const updateSession = (req, res) => {
  const { movies } = req.body;
  // console.log('log', movies[0].filmTitle);
  const { id } = req.body;
  const session = sessions.filter(film => film.id === parseInt(id) ? film.movies.push(movies[0]) : film)[0];
  const finalSession = sessions.map(film => film.id === parseInt(id) ? film = session : film);
  console.log('session', sessions);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
}

module.exports = { searchMovie, createSession, getSession, updateSession };
