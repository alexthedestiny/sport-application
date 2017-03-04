'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('aboutPage').
  component('aboutPage', {
    templateUrl: 'about-page/about-page.template.html',
    controller: ['$scope', 'Movie',
      function AboutPageController($scope, Movie) {

      }
    ]
  });
