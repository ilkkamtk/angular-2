'use strict';

angular.module('chatApp')
  .controller('ModifyMessageCtrl', function ($scope, AjaxFactory) {
    $scope.modifyMessage = function(){
        // data lomakkeesta
        var data = {
            message: $scope.message,
            mID: $scope.id
        };
        // kutsu modifyMessage-funktiota AjaxFactorystä
        var request = AjaxFactory.modifyMessage(data);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
