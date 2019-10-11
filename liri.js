var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");


var spotify = new Spotify(keys.spotify);

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
        if(process.argv[3]) {
            spotifyIt(process.argv[3]);
        }
        else {
            spotifyIt("The Sign");
        }
        
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
          var data = response.data;
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
    spotify.search({ type: 'track', query: song })
        .then(function(response) {
            // console.log(response);
            var data = response.tracks.items;
            // console.log(data[0]);
          console.log("*_*_*_*_*_*_*MUSICAL INFORMATION FOR QUERY: " + song + "*_*_*_*_*_*_*")
          data.forEach((object) => {
          console.log("The artist is: " + object.artists[0].name);
          console.log("The song's name is: " + object.name);
          console.log("The song album is: " + object.album.name);
          console.log("Preview link: " + object.preview_url);
          console.log("\n_____________________________________________\n");
          })
        })
        .catch(function(err) {
            console.log(err);
    });
}

function movieIt(movie) {

}

function doWhatItSays() {

}
