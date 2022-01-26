const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const uri = 'mongodb+srv://jtong:codesmith@cluster0.ykxgo.mongodb.net/movierecapp?retryWrites=true&w=majority'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to MongoDB');
});

app.use(express.json());

//client add to favorite, send post request to save movie into database
//app.post()

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