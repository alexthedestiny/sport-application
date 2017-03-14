'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('indexPage').
  component('indexPage', {
    templateUrl: 'components/index-page/index-page.template.html',
    controller: ['$scope', 'Movie', '$filter',
      function MovieListController($scope, Movie, $filter) {

      }

    ]
  });
