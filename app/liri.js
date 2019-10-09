require("dotenv").config();

var keys = require("./keys.js")
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// Example request for our reference
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    var names = data.artists.map(artist => artist.name);
    names.join(', ');
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });


  function doSomething(withSomething) {
     return withSomething + " I DID IT!";
  }