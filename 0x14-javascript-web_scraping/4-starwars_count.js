#!/usr/bin/node

const request = require('request');
 const apiUrl = process.argv[2] || 'https://swapi-api.alx-tools.com/api/films/';
const wedgeAntillesId = 18;

function fetchMovies(apiUrl) {
    request(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            console.error('Error fetching data:', error);
            return;
        } if (response.statusCode === 200 && body.results) {
		 const moviesWithWedgeAntilles = body.results.filter(movie =>
                movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)
            );
		 console.log(moviesWithWedgeAntilles.length);
        } else {
            console.error('Invalid response from API');
        }
    });
}fetchMovies(apiUrl);
