'use strict';

angular.module('chatApp')
  .controller('DeleteUserCtrl', function ($scope, AjaxFactory) {
    $scope.deleteUser = function(){
        // kutsu deleteUser-funktiota AjaxFactorystä
        var request = AjaxFactory.deleteUser($scope.user);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
