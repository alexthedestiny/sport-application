'use strict';

angular.
  module('sportApp').
  config(['$locationProvider', '$stateProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider',
    function config($locationProvider, $stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
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
            .state('login', {
                url: '/login',
                template: '<login></login>'
            })
            .state('admin', {
                url: '/admin',
                template: '<admin></admin>'
            })
            .state('adminAdd', {
                url: '/admin/add',
                template: '<admin-add></admin-add>'
        });

    }
  ]);
