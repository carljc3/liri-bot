require("dotenv").config();

var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
const axios = require('axios');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var input = process.argv.splice(3).join(" ");

// Example request for our reference
var spotifyTHIS = function (song) {
  spotify.search({
    type: 'track',
    query: song
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0].album.artists[0].name);
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].preview_url);
    console.log(data.tracks.items[0].album.name);
  });
}
var bandsintownTHIS = function (artist) {
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(queryURL).then(
    function (response) {
      var jsonData = response.data;
      console.log(response.data.offers);
      for (let i = 0; i < jsonData.length; i++) {
        var eventData = jsonData[i]
        console.log('----------------')
        console.log('Event Date:', eventData.datetime);
        console.log('Venue Name:', eventData.venue.name);
        console.log('City/State: ' + eventData.venue.city + ', ' + eventData.venue.region);
      }
    })
}

var OMDB = function (movie) {
  var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=342a1191&t=" + movie;

  axios.get(queryURL).then(
    function (response) {
      var jsonData = response.data;
      console.log(jsonData)
    })
}

// ****COMMAND ORDER: [node liri.js "COMMAND HERE" [song/artist/movie]**** //
// **ACTION = SPOTIFY THIS SONG COMMAND** //
if (action === "spotify-this-song") {
  if (input === "") {
    input = "Ace of base - the sign";
  }
  spotifyTHIS(title)
}
// **ACTION = CONCERT THIS** //
if (action === "concert-this") {
  if (input === "") {
    input = "BLANK";
  }
  bandsintownTHIS(input)
}
// // **ACTION = MOVIE THIS** //
if (action === "movie-this") {
  if (input === "") {
    input = "BLANK";
  }
  OMDB(input)
}

// // **ACTION = DO WHAT IT SAYS** //
// if (action === "do-what-it-says") {
//   if (title === "") {
//     title = "BLANK";
//   }
//   spotifyTHIS(concert)
// }
// // **LOG TO TEXT** //
// if (action === output) {
//   if (output === log text) {
// }
//Require API key to connect to javascript (file pathway to keys)
//Create variable expression with function expression for concerts for BIT
//Axios library for bands in town event pull data and OMDB
//Look though data object, write argument values for data retreived 