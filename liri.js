var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");



var spotify = new Spotify(keys.spotify);