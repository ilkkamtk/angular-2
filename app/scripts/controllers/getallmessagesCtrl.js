'use strict';

angular.module('chatApp')
  .controller('GetAllMessagesCtrl', function ($scope, AjaxFactory) {
        // kutsu signUp-funktiota AjaxFactorystä
        var request = AjaxFactory.getMessages();
        request.then(function(response){
            // tee vastauksella jotain
            $scope.messages = response.data;
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
  });
