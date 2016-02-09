'use strict';

angular.module('chatApp')
    .controller('ProfileCtrl', function ($scope, ChatService) {
            $scope.user = ChatService.user;
            console.log($scope.user);
    });