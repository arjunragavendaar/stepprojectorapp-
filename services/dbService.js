var MongoClient=require('mongodb').MongoClient;
exports.createConnection = function()
{
  MongoClient.connect("mongodb://projectormongo:projectormongo@ds111478.mlab.com:11478/projectormongo").then(function(client)
{
  console.log("Connected to MongoDB");
  exports.database=client.db("projectormongo");
});
}
