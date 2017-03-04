'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('movieDetails').
  component('movieDetails', {
    templateUrl: 'movie-details/movie-details.template.html',
    controller: ['$scope', 'Movie', '$stateParams',
      function MovieDetailsController($scope, Movie, $stateParams) {
          var self = this;
          self.movieID = $stateParams.movieID;
          $scope.$watch(
              function() {
                console.log('run wather for details');
                return Movie.getMovieDetails(self.movieID);
              },
              function(movie) {
                  console.dir(movie);
                  if(movie) {
                      self.movie = movie;
                      return;
                  }
                  Movie.loadDetailsSearch(self.movieID);
              }
          );

      }
    ]
  });
