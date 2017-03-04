'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('paginator').
  component('paginator', {
    templateUrl: 'paginator/ui-map.template.html',
    bindings: {
        query: '<'
    },
    controller: ['$scope', 'Movie', '$stateParams',
      function PaginatorController($scope, Movie, $stateParams) {
          var self = this;
          self.pages = 0;
          self.current_page = 1;
          self.query = this.query;
          $scope.$watch(
              function () {
                  return Movie.getTotalResults();
              },
              function(totalResults) {
                  if(totalResults) {
                      self.pages = Math.floor(totalResults/10) + 1;
                      return;
                  }
                  self.pages = 1;
              }
          );

          self.range = function() {
              var input = [];
              if(self.current_page == 1 || self.current_page == 2 || self.current_page == 3 || self.current_page == 4) {
                  for(var i = 1; i <= 6; i++) {
                      input.push(i);
                  }
                  if(self.query != null) {
                      input.push("...");
                    input.push(self.pages);
                  }
                  return input;
              }
              if(self.query != null) {
                  if (self.current_page == self.pages || self.current_page == (self.pages - 1) || self.current_page == (self.pages - 2) || self.current_page == (self.pages - 4)) {
                      input.push(1);
                      input.push("...");
                      for (var i = (self.pages - 4); i <= self.pages; i++) {
                          input.push(i);
                      }
                      return input;
                  }
              }
              input.push(1);
              input.push("...");
              input.push(self.current_page - 2);
              input.push(self.current_page - 1);
              input.push(self.current_page);
              input.push(self.current_page + 1);
              input.push(self.current_page + 2);
              input.push("...");
              input.push(self.pages);
              return input;
          };

          self.clickOnPage = function(event){
              event.preventDefault();
              self.current_page = parseInt(event.target.dataset.number);
              Movie.loadMovies(this.query, parseInt(event.target.dataset.number));
          };

      }
    ]
  });
