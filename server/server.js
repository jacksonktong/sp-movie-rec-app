const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const mongoose = require('mongoose');
const movieController = require("./controllers/movieController");
require('dotenv').config();
const uri = process.env.DB_CONNECTION

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//client add to favorite, send post request to save movie into database
app.post('/api', movieController.addFav, (req, res) => {
  res.sendStatus(200);
  return console.log('Favorited Request!');
})
//get request to favorites page
app.get('/api/favorites', movieController.grabFav, (req, res) =>{
  res.status(200).json(res.locals.favmovies);
  return console.log('in favorites page', res.locals.favmovies);
})

//error for unknown route
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
 
app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}...`); });

module.exports = app;