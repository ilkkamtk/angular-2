'use strict';

angular.module('chatApp')
    .controller('MessageCtrl', function ($scope, ChatService) {
        $scope.prepare = function (msg) {
            ChatService.message = msg;
        };
    
    });