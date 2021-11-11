const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getAllMovies, searchMovie, createSession, getSession, updateSession } = require('./Server/Routes/routes.js');
const cors = require('cors');

const app = express();

// Some nice middlewares :)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Add your own middlwares here!

app.get('/movies', getAllMovies);
app.get('/movies/:title', searchMovie);
app.post('/session', createSession);
app.get('/session/:id', getSession);
app.put('/session/:id', updateSession)

app.listen(3007);