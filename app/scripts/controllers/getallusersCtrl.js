'use strict';

angular.module('chatApp')
  .controller('GetAllUsersCtrl', function ($scope, AjaxFactory) {
    $scope.getAllUsers = function(){
        // kutsu getAllUsers-funktiota AjaxFactorystä
        var request = AjaxFactory.getAllUsers();
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
