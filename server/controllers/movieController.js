const MovieList = require('../models/movieListModel');

const movieController = {};

movieController.addFav = (req, res, next) => {
  console.log('log body', req.body);
  // MovieList.create({title: "placeholder"},
  //   (err, data) => {
  //     if(err) {
  //       return next(
  //         {log: 'Error in adding favorite'}, res.sendStatus(400)
  //       );
  //     }
  //     //save data to persist
  //     return next();
  //   }
  // );
  return next();
}

module.exports = movieController;