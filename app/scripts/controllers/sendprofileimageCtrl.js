'use strict';

angular.module('chatApp')
  .controller('SendProfileImageCtrl', function ($scope, AjaxFactory) {
    $scope.sendProfileImage = function(){
        // data lomakkeesta
        var data = new FormData(document.getElementById("image"));
        // kutsu sendProfileImage-funktiota AjaxFactorystä
        var request = AjaxFactory.sendProfileImage(data);
        request.then(function(response){
            // tee vastauksella jotain
            console.log(response.data);
        }, function(error){
            // tee virheellä jotain
            console.log(error.data);
        });
    };
  });
