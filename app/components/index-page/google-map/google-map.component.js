'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('googleMap').
  component('googleMap', {
    templateUrl: 'components/index-page/google-map/google-map.template.html',
    controller: ['$scope', 'Movie', '$filter',
      function MovieListController($scope, Movie, $filter) {

            google.maps.visualRefresh = true;
            $scope.sub_cat = [
                {id: 1, title: "Футбольные поля", id_cat: {id: 1, title: "Площадки"}},
                {id: 2, title: "Баскетбольные поля", id_cat: {id: 1, title: "Площадки"}},
                {id: 3, title: "Волейбольные поля", id_cat: {id: 1, title: "Площадки"}},
                {id: 4, title: "Теннисные корты", id_cat: {id: 1, title: "Площадки"}},
                {id: 5, title: "Единоборства", id_cat: {id: 1, title: "Площадки"}},
                {id: 6, title: "Сквош", id_cat: {id: 1, title: "Площадки"}},
                {id: 7, title: "Танцы", id_cat: {id: 1, title: "Площадки"}},
                {id: 8, title: "Хоккей", id_cat: {id: 1, title: "Площадки"}},
                {id: 9, title: "Яхтинг", id_cat: {id: 1, title: "Площадки"}},
                {id: 10, title: "Тренажерный зал", id_cat: {id: 2, title: "Занятия"}},
                {id: 11, title: "CrossFit (Кросфит)", id_cat: {id: 2, title: "Занятия"}},
                {id: 12, title: "Пилатес", id_cat: {id: 2, title: "Занятия"}},
                {id: 13, title: "ОФП", id_cat: {id: 2, title: "Занятия"}},
                {id: 14, title: "Скиппинг", id_cat: {id: 2, title: "Занятия"}},
                {id: 15, title: "Стретчинг", id_cat: {id: 2, title: "Занятия"}},
                {id: 16, title: "Стрип-пластика", id_cat: {id: 2, title: "Занятия"}},
                {id: 17, title: "Программа похудения", id_cat: {id: 2, title: "Занятия"}},
                {id: 18, title: "Калланетика", id_cat: {id: 2, title: "Занятия"}},
                {id: 19, title: "Бодибилдинг", id_cat: {id: 2, title: "Занятия"}},
                {id: 20, title: "Велоспорт", id_cat: {id: 2, title: "Занятия"}},
                {id: 21, title: "Авто/Мотоспорт", id_cat: {id: 2, title: "Занятия"}},
                {id: 22, title: "Академическая гребля", id_cat: {id: 2, title: "Занятия"}}
            ];
            // $scope.selectedItem = $scope.sub_cat[0];
            $scope.selectedItem = null;
            $scope.searchField = function(item) {
                console.log($filter);
                return true;
            };
            $scope.id_active_cat = 1;
            $scope.changeIdCat = function (id_cat) {
                $scope.id_cat = id_cat;
                return $scope.id_cat;
            };
            $scope.markers = [
                {
                    id:1,
                    latitude: 50.450645,
                    longitude: 30.523180,
                    showWindow: false,
                    draggable: true,
                    title: 'Футбольное поле №1',
                    description: 'Супер-пупер офигенное футбольное поле №1',
                    id_cat: 1,
                    id_sub_cat: 1,
                    opts: {
                        draggable: true,
                        icon:'../img/Stadium-48.png'
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
                },
                {
                    id:2,
                    latitude: 50.650645,
                    longitude: 30.523180,
                    showWindow: false,
                    draggable: true,
                    title: 'Супер помещение',
                    description: 'Супер-пупер офигенный клубешник',
                    id_cat: 1,
                    id_sub_cat: 2,
                    opts: {
                        draggable: true,
                        icon:'../img/Basketball-Field-48.png'
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
                },
                {
                    id:3,
                    latitude: 50.110345,
                    longitude: 30.323380,
                    showWindow: false,
                    draggable: true,
                    title: 'Супер воллейбольное поле',
                    description: 'Супер-пупер офигенное воллейбольное поле',
                    id_cat: 1,
                    id_sub_cat: 3,
                    opts: {
                        draggable: true,
                        icon:'../img/SportNet-48.png'
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
                },
                {
                    id:4,
                    latitude: 50.277845,
                    longitude: 30.376880,
                    showWindow: false,
                    draggable: true,
                    title: 'Супер теннисный корт',
                    description: 'Супер-пупер теннис',
                    id_cat: 1,
                    id_sub_cat: 4,
                    opts: {
                        draggable: true,
                        icon:'../img/Tennis-48.png'
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
                },
                {
                    id:5,
                    latitude: 50.177845,
                    longitude: 30.276880,
                    showWindow: false,
                    draggable: true,
                    title: 'Самбо',
                    description: 'Супер-пупер самбо',
                    id_cat: 1,
                    id_sub_cat: 5,
                    opts: {
                        draggable: true,
                        icon:'../img/Wrestling-48.png'
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
                },
                {
                    id:6,
                    latitude: 50.377845,
                    longitude: 30.376880,
                    showWindow: false,
                    draggable: true,
                    title: 'сквош',
                    description: 'Супер-пупер сквош',
                    id_cat: 1,
                    id_sub_cat: 6,
                    opts: {
                        draggable: true,
                        icon:'../img/SquashRacquetFilled-50.png'
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
                },
                {
                    id:7,
                    latitude: 50.977845,
                    longitude: 30.176880,
                    showWindow: false,
                    draggable: true,
                    title: 'Танцы',
                    description: 'Супер-пупер танцы',
                    id_cat: 1,
                    id_sub_cat: 7,
                    opts: {
                        draggable: true,
                        icon:'../img/Dancing-48.png'
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
                },
                {
                    id:8,
                    latitude: 50.077845,
                    longitude: 30.276880,
                    showWindow: false,
                    draggable: true,
                    title: 'Хокей',
                    description: 'Супер-пупер Хокей',
                    id_cat: 1,
                    id_sub_cat: 8,
                    opts: {
                        draggable: true,
                        icon:'../img/Hockey-48.png'
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
                },
                {
                    id:9,
                    latitude: 50.077845,
                    longitude: 30.276880,
                    showWindow: false,
                    draggable: true,
                    title: 'Яхтинг',
                    description: 'Супер-пупер яхтинг',
                    id_cat: 1,
                    id_sub_cat: 9,
                    opts: {
                        draggable: true,
                        icon:'../img/Yacht-48.png'
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
                }
            ];
            $scope.map = {
              control: {},
              center: { latitude: 50.450645, longitude: 30.523180 },
              zoom: 9,
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
