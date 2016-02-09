'use strict';

angular.module('chatApp')
  .controller('GetOneMessageCtrl', function ($scope, AjaxFactory) {
    $scope.getOneMessage = function(){
        // kutsu getOneMessage-funktiota AjaxFactorystä
        var request = AjaxFactory.getOneMessage($scope.message);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
