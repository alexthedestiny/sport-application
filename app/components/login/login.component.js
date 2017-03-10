'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('login').
component('login', {
    templateUrl: 'components/login/login.template.html',
    controller: ['$scope', 'Movie',
        function AdminController($scope, Movie) {

        }
    ]
});
