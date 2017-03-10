'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('aboutPage').
  component('aboutPage', {
    templateUrl: 'components/about-page/about-page.template.html',
    controller: ['$scope', 'Movie', '$timeout',
      function AboutPageController($scope, Movie, $timeout) {
        $scope.activeMainTabs = -1;
        $scope.activeTab = 0;
        $scope.isCourt = false;
        $scope.courts = [];
        $scope.toogleTabs = function(index) {
          if(index == $scope.activeMainTabs)
          {
              $timeout(function(){
                  $scope.activeMainTabs = - 1;
              });
          }
        };

        $scope.showCourts = function() {
            $scope.isCourt = true;
        };
        $scope.addMoreCourt = function() {
          $scope.courts.push({});
          $timeout(function(){
              $scope.activeTab = $scope.courts.length - 1;
          });

        }
      }
    ]
  });
