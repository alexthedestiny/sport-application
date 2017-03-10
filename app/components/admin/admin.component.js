'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('admin').
  component('admin', {
    templateUrl: 'components/admin/admin.template.html',
    controller: ['$scope', 'Movie',
      function AdminController($scope, Movie) {

      }
    ]
  });
