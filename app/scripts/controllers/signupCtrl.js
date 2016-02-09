'use strict';

angular.module('chatApp')
  .controller('SignUpCtrl', function ($scope, AjaxFactory) {
    $scope.signUp = function(){
        // data lomakkeesta
        var data = {
            name: $scope.user
        };
        // kutsu signUp-funktiota AjaxFactorystä
        var request = AjaxFactory.signUp(data);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
