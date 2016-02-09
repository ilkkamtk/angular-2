'use strict';

angular.module('chatApp')
  .controller('ReplyMessageCtrl', function ($scope, AjaxFactory) {
    $scope.replyMessage = function(){
        // data lomakkeesta
        var data = {
            parent: $scope.parent,
            message: $scope.message,
            uID: $scope.user
        };
        // kutsu replyMessage-funktiota AjaxFactorystä
        var request = AjaxFactory.replyMessage(data);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
