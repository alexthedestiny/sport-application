'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('indexPage').
  component('indexPage', {
    templateUrl: 'components/index-page/index-page.template.html',
    controller: ['$scope', 'Movie',
      function MovieListController($scope, Movie) {
            google.maps.visualRefresh = true;
            $scope.markers = [{
                id:0,
                latitude: 50.450645,
                longitude: 30.523180,
                showWindow: false,
                draggable: true,
                title: 'asd',
                opts: {
                    draggable: true
                },
                events: {
                    dragend: function (marker) {
                        $scope.$apply(function () {
                            $scope.markers.latitude = marker.getPosition().lat().toFixed(5);
                            $scope.markers.longitude = marker.getPosition().lng().toFixed(5);
                        });
                    },
                    click: function (marker) {
                        $scope.$apply(function () {
                            $scope.markers.splice(marker.key, 1);
                        });
                    }
                }
            }];
            $scope.map = {
              control: {},
              center: { latitude: 50.450645, longitude: 30.523180 },
              zoom: 14,
              showWindow: false,
              addSFewMarkers: true,
              onClick: function (mapObj, event, eventArguments) {
                  if(!$scope.map.addSFewMarkers) {
                      $scope.markers = [];
                  }
                  $scope.markers.push({
                      id:$scope.markers.length + 1,
                      latitude: eventArguments[0].latLng.lat(),
                      longitude: eventArguments[0].latLng.lng(),
                      showWindow: false,
                      title: 'Marker - ' + $scope.markers.length + 1,
                      opts: {
                          draggable: true
                      },
                      events: {
                          dragend: function (marker) {
                              $scope.$apply(function () {
                                  $scope.markers.latitude = marker.getPosition().lat().toFixed(5);
                                  $scope.markers.longitude = marker.getPosition().lng().toFixed(5);
                              });

                          },
                          click: function (marker) {
                              $scope.$apply(function () {
                                  // $scope.markers.id = marker.key;
                                  // console.dir($scope.markers.id);
                                  // console.dir(find($scope.markers, marker.key));
                                  for(var i = 0; i < $scope.markers.length; i++) {
                                      if($scope.markers[i].id == marker.key) {
                                          $scope.markers.splice(i, 1);
                                      }
                                  }
                                  console.dir($scope.markers);
                              });
                          }
                      }
                  });
                  $scope.$apply();
              }
          };
      }
    ]
  });
