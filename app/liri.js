require("dotenv").config();

var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var title = process.argv.splice(3).join(" ");


// Example request for our reference
var spotifyTHIS = function(song){
  spotify.search({ type: 'track', query:song}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0].album.artists[0].name); 
  console.log(data.tracks.items[0].name); 
  console.log(data.tracks.items[0].preview_url);
  console.log(data.tracks.items[0].album.name);
  });

} 

if (action === "spotify-this-song"){

  spotifyTHIS(title)
}

//OMDB API Key *** 
//BandsInTowns Key

//PLACE keys in Key folder so they are encrypted
//Require API key to connect to javascript (file pathway to keys)
//Create variable expression with function expression for concerts for BIT
//Axios library for bands in town event pull data and OMDB
//Look though data object, write argument values for data retreived 