'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('header').
  component('headerComponent', {
    templateUrl: 'header/header.template.html',
    controller: ['$scope', 'Movie',
      function HeaderController($scope, Movie) {

      }
    ]
  });
