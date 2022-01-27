const MovieList = require('../models/movieListModel');

const movieController = {};

movieController.addFav = (req, res, next) => {
  console.log('add fav middleware', req.body);
  const {title, releasedate} = req.body;
  MovieList.create({title: title, releasedate: releasedate},
    (err, data) => {
      if(err) {
        return next(
          {log: 'Error in adding favorite'}, res.sendStatus(400)
        );
      }
      //save data to persist
      res.locals.favorites = req.body;
      return next();
    }
  );
  return next();
};

movieController.grabFav = (req, res, next) => {
  MovieList.find({}, (err, data)=>{
    if(err){
      return next({log: 'Error in grabbing favorites'}, err);
    }
    res.locals.favmovies = data
    return next();
  });
}

module.exports = movieController;