'use strict';

angular.module('chatApp')
  .controller('GetThreadsCtrl', function ($scope, AjaxFactory) {
    $scope.getThreads = function(){
        // kutsu getThreads-funktiota AjaxFactorystä
        var request = AjaxFactory.getThreads();
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
