'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('footer').
  component('footerComponent', {
    templateUrl: 'components/footer/footer.template.html',
    controller: ['$scope', 'Movie',
      function HeaderController($scope, Movie) {

      }
    ]
  });
