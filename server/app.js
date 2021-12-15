const express = require('express');
const path = require('path');
const { searchMovie, createSession, getSession, updateSession, updateVotes, deleteSession } = require('./routes/routes.js');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3007

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/movies/:title', searchMovie);
app.post('/session', createSession);
app.get('/session/:id', getSession);
app.put('/session/1', updateVotes);
app.put('/session/:id', updateSession);
app.delete('/session/:id', deleteSession);

app.listen(port, () => console.log('server up and running'));