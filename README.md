# sirius-step
This is a projector app repository that is being developed during the STEP workshop at Velammal Engineering College,Chennai.

## Google Font
https://fonts.googleapis.com/css?family=Lato:300

## jQuery
https://code.jquery.com/jquery-3.2.1.min.js

## Link to JSON
https://api.myjson.com/bins/tls49


The quickest way to get started with express is to utilize the express generator
```
$ npm install -g express-generator@4 # Install Express generator globally
$ express ProjectorServer # Generate an express project called ProjectorServer $ cd ProjectorServer
$ npm install # Install dependencies
$ npm start # Start the server
```

## MongoDB install
```
npm install mongodb --save
```

## STATUS CODES
```
exports.STATUS_CODE = {
    SERVER_ERROR : {
        CODE : 500,
        STATUS : "Server Error",
        MESSAGE : "Some error occured in server"
    },
    DB_ERROR : {
        CODE : 500,
        STATUS : "Database Error",
        MESSAGE : "Some error occured in the database"
    },
    INSUFFICIENT_PARAMS : {
        CODE : 400,
        STATUS : "Bad request",
        MESSAGE : "Insufficient parameters"
    },
    MOVIE_NOT_FOUND : {
        CODE : 401,
        STATUS : "Not found",
        MESSAGE : "No such movie found. Please check again"
    }
};
```
