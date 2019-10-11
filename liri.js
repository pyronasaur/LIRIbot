var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");

//var spotify = new Spotify(keys.spotify);

if (process.argv[2]) {
    var command = process.argv[2];
}

switch(command) {
    case "concert-this" :
    {
        concert(process.argv[3]);
    }
    case "spotify-this-song" :
    {
        spotifyIt(process.argv[3]);
    }
    case "movie-this" :
    {
        movieIt(process.argv[3]);
    }
    case "do-what-it-says" :
    {
        doWhatItSays();
    }
}

function concert(band) {
    axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function(response) {
          //console.log(response.data);
          var data = response.data;
          //console.log(data[0].venue);
          console.log("*_*_*_*_*_*_*LIST OF VENUES FOR " + band + "*_*_*_*_*_*_*")
          data.forEach((object) => {
          console.log("The name of the venue is: " + object.venue.name);
          console.log("The location of the venue is: " + object.venue.city + ", " + object.venue.country);
          console.log("The date of the event is: " + moment(object.datetime).format('MM/DD/YYYY'));
          console.log("\n_____________________________________________\n");
          })
          
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      
}

function spotifyIt(song) {

}

function movieIt(movie) {

}

function doWhatItSays() {

}
