'use strict';
angular.module('chatApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html',
            });

        $urlRouterProvider.otherwise('/');
    });