'use strict';

angular.module('chatApp')
  .controller('GetParentsCtrl', function ($scope, AjaxFactory) {
    $scope.getParents = function(){
        // kutsu getParents-funktiota AjaxFactorystä
        var request = AjaxFactory.getParents();
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
