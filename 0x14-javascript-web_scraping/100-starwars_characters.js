#!/usr/bin/node
const request = require('request');
const Url = 'https://swapi-api.alx-tools.com/api/films/';
  const movieId = process.argv[2];
request(url, function (error, response, body) {
  if (!error) {
    const characters = JSON.parse(body).characters;
    characters.forEach((character) => {
      request(character, function (error, response, body) {
        if (!error) {
          console.log(JSON.parse(body).name);
        }
      });
    });
  }
});
