'use strict';

angular.module('chatApp')
  .controller('GetOneThreadCtrl', function ($scope, AjaxFactory) {
    $scope.getOneThread = function(){
        // kutsu getOneThread-funktiota AjaxFactorystä
        var request = AjaxFactory.getOneThread($scope.thread);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
