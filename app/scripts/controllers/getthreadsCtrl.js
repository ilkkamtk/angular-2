'use strict';

angular.module('chatApp')
    .controller('GetThreadsCtrl', function ($scope, AjaxFactory, ChatService) {
        // kutsu getThreads-funktiota AjaxFactorystä
        var request = AjaxFactory.getThreads();
        request.then(function (response) {
            // tee vastauksella jotain
            console.log(response.data);
            $scope.messages = response.data.reverse();
        }, function (error) {
            // tee virheellä jotain
            console.log(error.data);
        });
    
        $scope.reply = ChatService.reply;
    });