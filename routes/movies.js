var express = require('express');
var router = express.Router();
var moviesController = require
('../controllers/moviesController');


router.get('/all',moviesController.getAllMovies)
      .post('/add',moviesController.addNewMovie);
module.exports = router;
