var movies = require('./movieData');
var db = require('../services/dbService');
exports.getAllMovies=function(req,res){
  //console.log(db.database);
  var dbservice = db.database;
  var moviesCollection = dbservice.collection("movies");

  moviesCollection.find().toArray().then(function(result){
    var outputJSON ={
      "isSuccess":true,
      "data":result
    }
    return res.json(outputJSON);
  });

};
exports.addNewMovie = function(req,res,next){
  var dbservice = db.database,
  movie = req.body;
  moviesCollection = dbservice.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess":true
    });
  });
}
