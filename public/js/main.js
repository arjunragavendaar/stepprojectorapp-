$.ajax({
  type:"get",
  url:"https://127.0.0.1:3000/movies/all",
  dataType:"json",
  success:function(response){
    var data=formObject(response);
    constructdom(data);
  },
  error:function(response){
    console.log(response)
  }
});

function formObject(res){
  var flags=[],categoryObject=[];
  var length=res.length;
  for (var i = 0; i < length; i++) {
    var movie=res[i];
    var index=flags.indexOf(movie.language);
    if(index>=0){
      categoryObject[index].movies.push(movie.name);
      categoryObject[index].image.push(movie.thumbnailUrl);
      categoryObject[index].year.push(movie.releaseYear);
      categoryObject[index].rating.push(movie.rating);
      continue;
    }
    else{
      flags.push(movie.language);
    }
    var objschema={
      "category":movie.language,
      "movies":[],
      "image":[],
      "year":[],
      "rating":[]
    }
    objschema.movies.push(movie.name);
    objschema.image.push(movie.thumbnailUrl);
    objschema.year.push(movie.releaseYear);
    objschema.rating.push(movie.rating);
    categoryObject.push(objschema);
  }
  console.log(categoryObject);
  return categoryObject;
}

function constructdom(data){
  for(var j=0;j<data.length;j++){
    var objectschema=data[j];
    $(".content").append("<div class='clearfix category' id='category"+j+"'></div>");
    $("#category"+j).append("<h3 class='categoryName'>"+objectschema.category+"</h3>");
    for (var i = 0; i < objectschema.movies.length; i++) {
      $("#category"+j).append("<div class='movie fleft'><a href='#'><div class='poster' id='poster"+i+"'></div></a><div class='details'><p class='yearOfRelease' id='yearOfRelease"+i+"'></p><h4 class='name'id='name"+i+"'></h4><div class='stars' id='stars"+i+"'></div></div></div>");
      $("#category"+j+" #poster"+i).append("<img class='name' src='"+objectschema.image[i]+"'>");
      $("#category"+j+" #name"+i).append(objectschema.movies[i]);
      $("#category"+j+" #yearOfRelease"+i).append(objectschema.year[i]);
      var rate=objectschema.rating[i];
      var len=rate/1,rem=rate%1;
      for(var k=1;k<=len;k++){
        $("#category"+j+" #stars"+i).append("<div class='star star-full'></div>");
      }
      if(rem!=0){
        $("#category"+j+" #stars"+i).append("<div class='star star-half'></div>");
      }
    }
  }
}
