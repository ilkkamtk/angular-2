'use strict';

angular.module('chatApp')
  .controller('DeleteMessageCtrl', function ($scope, AjaxFactory) {
    $scope.deleteMessage = function(){
        // kutsu signUp-funktiota AjaxFactorystä
        var request = AjaxFactory.deleteMessage($scope.message);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
