'use strict';

angular.
  module('core.movie').
  factory('Movie', ['$resource',
    function($resource) {
      var self = this;
      self.movies = [];
      self.detailsMovie = [];
      self.totalResults = 0;
      var request = $resource('http://www.omdbapi.com/', {}, {
          search: {
              method: 'GET'
          }
      });
      var loadMovies = function(searchString, page) {
          request.search({
              s: searchString || 'Iron man',
              page: page || 1
          }, function(responce) {
              if(responce.Response == 'True') {
                  self.movies = responce.Search;
                  self.totalResults = responce.totalResults;
              }
          });
      };
      var loadDetailsSearch = function(idMovie) {
          request.search({
              i: idMovie
          }, function(responce) {
              if(responce.Response == 'True') {
                  self.detailsMovie.push(responce);
              }
          });
      };
      var getMovies = function() {
        return self.movies;
      };
      var getMovieDetails = function(id) {
          for(var i = 0; i < self.detailsMovie.length; i++) {
            if(self.detailsMovie[i].imdbID == id) {
              return self.detailsMovie[i];
            }
          }
          return null;
      };
      var getTotalResults = function() {
        return self.totalResults;
      };

      return {
          getMovies: getMovies,
          getMovieDetails: getMovieDetails,
          request: request,
          loadMovies: loadMovies,
          loadDetailsSearch: loadDetailsSearch,
          getTotalResults: getTotalResults,
      };

    }
  ]);
