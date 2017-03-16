'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('header').
  component('headerComponent', {
    template: require('./header.template.html'),
    controller: ['$scope', 'Movie',
      function HeaderController($scope, Movie) {

      }
    ]
  });
