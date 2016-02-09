'use strict';

angular.module('chatApp')
  .controller('GetOneUserCtrl', function ($scope, AjaxFactory) {
    $scope.getOneUser = function(){
        // kutsu getOneUser-funktiota AjaxFactorystä
        var request = AjaxFactory.getOneUser($scope.user);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
