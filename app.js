const express = require('express');
const path = require('path');
const { searchMovie, createSession, getSession, updateSession, deleteSession } = require('./Server/Routes/routes.js');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/movies/:title', searchMovie);
app.post('/session', createSession);
app.get('/session/:id', getSession);
app.put('/session/:id', updateSession);
app.delete('/session/:id', deleteSession);

app.listen(3007, () => console.log('server up and running'));