'use strict';

angular.module('chatApp')
  .controller('SignCtrl', function ($scope, AjaxFactory) {
    $scope.signUp = function(){
        // data lomakkeesta
        var data = {
            name: $scope.user
        };
        // kutsu login-funktiota AjaxFactorystä
        var request = AjaxFactory.newUser(data);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
