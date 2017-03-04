'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('uiMapModule').
  component('uiMapModule', {
    templateUrl: 'ui-map/ui-map.template.html',
    controller: ['$scope',
      function UiMapController($scope) {
          var self = this;

          $scope.markers = [];

          $scope.mapOptions = {
              center: new google.maps.LatLng(35.784, -78.670),
              zoom: 4,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          $scope.cities = [
            {
              place: "India",
              desc: "A country of culture and tradition!",
              lat : 23.200000,
              long: 79.225487
            },
            {
              place: "New Delhi",
              desc: "Capital of India...",
              lat : 28.500000,
              long: 77.250000
            },
            {
              place: "Kolkata",
              desc: "City of Joy...",
              lat : 22.500000,
              long: 88.400000
            },
            {
              place: "Mumbai",
              desc: "Commercial city...",
              lat : 19.000000,
              long: 72.90000
            }
          ];

          $scope.addMarker = function(event, params) {
              new google.maps.Marker({
                  map: $scope.myMap,
                  position: params[0].latLng

              });
          }


      }
    ]
  });

function onGoogleReady() {
    angular.bootstrap(document.getElementById("map"), ['uiMapModule']);
}
