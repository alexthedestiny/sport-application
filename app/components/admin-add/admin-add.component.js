'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('adminAdd').
  component('adminAdd', {
    templateUrl: 'components/admin-add/admin-add.template.html',
    controller: ['$scope', 'Movie',
      function AdminAddController($scope, Movie) {

      }
    ]
  });
