'use strict';

angular.
  module('sportApp').
  config(['$locationProvider', '$stateProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider',
    function config($locationProvider, $stateProvider, $urlRouterProvider, GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            china: true
        });
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
              url: '/',
              template: '<index-page></index-page>'
            })
            .state('about', {
                url: '/about',
                template: '<about-page></about-page>'
            })
            .state('movie', {
                url: '/movie/:movieID',
                template: '<movie-details></movie-details>'
            });
    }
  ]);
