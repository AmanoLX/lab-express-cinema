const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      console.log('From DB:', allMovies);
      res.render('movies', { movies: allMovies} );
    })
    .catch(error => {
      console.log('Error looking for movies:', error);
    });
});


router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDetails => {
      console.log(movieDetails);
      res.render('movie-details', { movie: movieDetails });
    })
    .catch(error => {
      console.log('Error looking for id:', error);
    });
});

module.exports = router; 